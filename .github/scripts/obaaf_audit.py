"""Audit a commit as data using the checker and policy from protected main."""
import io
import json
import os
from pathlib import Path, PurePosixPath
import re
import subprocess
import sys
import tarfile
import urllib.request

REPOSITORY = 'Ofonna-N/netflix-clone-2'
CONTEXT = 'OBAAF audit'
ROOT = Path(__file__).resolve().parents[2]
RESULT = Path(os.environ.get('RUNNER_TEMP', '.')) / 'obaaf-result.json'

def target_sha():
    event = json.loads(Path(os.environ['GITHUB_EVENT_PATH']).read_text())
    if os.environ['GITHUB_REPOSITORY'] != REPOSITORY:
        raise ValueError('Unexpected repository')
    if os.environ['GITHUB_EVENT_NAME'] == 'workflow_run':
        run = event['workflow_run']
        if run['name'] != 'CI' or run['event'] not in ('pull_request', 'push', 'workflow_dispatch'):
            raise ValueError('Unexpected triggering workflow')
        sha = run['head_sha']
    elif os.environ['GITHUB_EVENT_NAME'] == 'workflow_dispatch':
        sha = os.environ['GITHUB_SHA']
    else:
        raise ValueError('Unexpected event')
    if not re.fullmatch('[0-9a-f]{40}', sha):
        raise ValueError('Invalid commit SHA')
    return sha

def publish(state, description):
    url = f"https://api.github.com/repos/{REPOSITORY}/statuses/{target_sha()}"
    payload = {'state': state, 'context': CONTEXT, 'description': description,
               'target_url': f"https://github.com/{REPOSITORY}/actions/runs/{os.environ['GITHUB_RUN_ID']}"}
    request = urllib.request.Request(url, method='POST', data=json.dumps(payload).encode(),
        headers={'Authorization': 'Bearer '+os.environ['GH_TOKEN'],
                 'Accept': 'application/vnd.github+json', 'User-Agent': 'obaaf-audit'})
    with urllib.request.urlopen(request, timeout=30) as response:
        response.read()

def snapshot(destination):
    # Public data only. No token is sent to the archive host, and no PR scripts run.
    url = f'https://codeload.github.com/{REPOSITORY}/tar.gz/{target_sha()}'
    with urllib.request.urlopen(url, timeout=60) as response:
        archive = response.read(20 * 1024 * 1024 + 1)
    if len(archive) > 20 * 1024 * 1024:
        raise ValueError('Repository archive exceeds 20 MiB')
    total = 0
    count = 0
    with tarfile.open(fileobj=io.BytesIO(archive), mode='r:gz') as source:
        for member in source:
            count += 1
            if count > 10000:
                raise ValueError('Too many archive entries')
            parts = PurePosixPath(member.name).parts
            if len(parts) < 2:
                continue
            relative = PurePosixPath(*parts[1:])
            if relative.is_absolute() or '..' in relative.parts or '\\' in str(relative):
                raise ValueError('Unsafe archive path')
            if member.isdir():
                continue
            if not member.isfile():
                raise ValueError('Links and special archive entries are not supported')
            total += member.size
            if total > 64 * 1024 * 1024:
                raise ValueError('Expanded archive exceeds 64 MiB')
            path = destination.joinpath(*relative.parts)
            path.parent.mkdir(parents=True, exist_ok=True)
            with source.extractfile(member) as content:
                path.write_bytes(content.read())

def audit():
    import tempfile
    RESULT.unlink(missing_ok=True)
    with tempfile.TemporaryDirectory(prefix='obaaf-snapshot-') as folder:
        destination = Path(folder)
        snapshot(destination)
        # PR-side ignore files cannot weaken this audit. Policy comes from main.
        command = [sys.executable, '-c', 'from obaaf.cli import main; raise SystemExit(main())', 'check', str(destination),
                   '--config', str(ROOT / '.github/obaaf-policy.yml'), '--fail-on', 'medium']
        process = subprocess.run(command, capture_output=True, text=True, timeout=180)
        report = process.stdout + process.stderr
        # Prevent untrusted text from being interpreted as runner commands.
        import uuid
        marker = 'obaaf-' + uuid.uuid4().hex
        print(f'::stop-commands::{marker}')
        print(report)
        print(f'::{marker}::')
        Path(os.environ['GITHUB_STEP_SUMMARY']).write_text(
            f'# OBAAF audit\n\nCommit: `{target_sha()}`\n\n' + report)
        RESULT.write_text(json.dumps({'passed': process.returncode == 0}))
        return process.returncode

if __name__ == '__main__':
    if sys.argv[1] == 'pending':
        RESULT.unlink(missing_ok=True)
        publish('pending', 'Auditing workflow and repository configuration')
    elif sys.argv[1] == 'audit':
        sys.exit(audit())
    elif sys.argv[1] == 'finish':
        passed = RESULT.exists() and json.loads(RESULT.read_text()).get('passed') is True
        publish('success' if passed else 'failure',
                'Configuration audit passed' if passed else 'Audit failed; open the run for details')
    else:
        raise ValueError('Unknown command')
