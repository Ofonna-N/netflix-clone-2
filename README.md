# Flixclone
Welcome to the Netflix Clone project! This is a demo application created to explore and demonstrate the capabilities of React Router 7 along with other modern web technologies.
This project represents an ongoing effort to research and implement a migration from Create React App to React Router 7, showcasing its potential as a modern, production-ready template for building full-stack React applications.

[Demo](https://netflix-clone-2-five.vercel.app/)

![image](https://github.com/user-attachments/assets/a148f65e-9393-462f-9de2-7d5cb56da870)


## Features

- **React Router 7**: Fully integrated to handle client-side routing with nested routes.

- **TypeScript**: Strongly typed codebase for better scalability and maintainability.

- **TanStack Query**: Advanced state management and server-state synchronization for seamless data handling.

- **Material-UI & Emotion**: For clean and professional UI design.

- **Tailwind CSS**: Utility-first CSS for rapid styling.

- **Framer Motion**: Smooth and engaging animations to enhance user experience.

- **Vite**: Lightning-fast bundler for optimized development and build workflows.

- **Responsive Design**: Looks great on any device, from desktops to smartphones.

- **Swiper.js**: Interactive and touch-friendly carousels for showcasing content.

## Tech Stack 🛠️
### Frameworks & Libraries
- React 19
- React Router 7
- Material-UI
- Framer Motion
- Swiper.js

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

This template includes three Dockerfiles optimized for different package managers:

- `Dockerfile` - for npm
- `Dockerfile.pnpm` - for pnpm
- `Dockerfile.bun` - for bun

To build and run using Docker:

```bash
# For npm
docker build -t my-app .

# For pnpm
docker build -f Dockerfile.pnpm -t my-app .

# For bun
docker build -f Dockerfile.bun -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Continuous integration

GitHub Actions runs `.github/workflows/ci.yml` on pull requests and pushes to
`main`. It installs the locked dependencies with Node.js 22, checks TypeScript,
and builds the application. Open the pull request's checks or the repository's
Actions tab to see each step and its output.

Run the same checks locally from the project folder:

```bash
npm ci
npm run typecheck
npm run build
```

These checks verify that the code type-checks and builds. They do not test browser
interactions or fetch live movie data, and do not need a TMDB API key. A successful
build does not establish that every application feature works.

The workflow uses read-only repository permissions and pinned action revisions.
`.github/CODEOWNERS` requests review from @Ofonna-N for workflow changes and
changes to the ownership file. Requiring that approval before merging also needs
an appropriate GitHub branch rule.

## OBAAF configuration audit

After each CI run completes, `OBAAF configuration audit` reads the triggering
commit's files and reports an `OBAAF audit` status on that commit. Medium or high
findings, invalid files, and audit setup failures produce a failed status.

The auditor runs code and policy from protected `main`. It downloads the proposed
commit as data; it does not run that commit's scripts, install its dependencies,
or use artifacts or caches from its CI run. Proposed OBAAF ignore files cannot
weaken the audit. Its scope is workflow and repository configuration, not
application source-code vulnerabilities or browser behavior.

A read-only deploy key grants access only to the private OBAAF repository. Its
private half is stored as `OBAAF_DEPLOY_KEY` in the `obaaf-audit` environment,
which permits only `main`. OBAAF is pinned to a reviewed commit. No private source
or key is committed to this project or uploaded as a build artifact.

The policy contains one documented, time-limited exception for the auditor's own
private-repository key: OBAAF warns about secrets in `workflow_run` jobs even when
the proposed code is only read as data. Review that exception before its expiry
on January 9, 2027. Changes to the auditor or policy deserve security review.

To inspect results, open the pull request's **OBAAF audit** status or the matching
**OBAAF configuration audit** run in the Actions tab. The report appears in the
run summary and audit step log. A passing result means no active findings at the
configured threshold; it is not a guarantee that the repository is secure.

### Reproduce the risk-and-fix demonstration

Both `Type check and build` and `OBAAF audit` are required before merging into
`main`. The audit starts after CI completes, so it may initially appear as an
expected or pending status.

1. Create a branch from `main`.
2. In `.github/workflows/ci.yml`, replace the checkout action's full commit SHA
   with `v6.0.0`, then open a pull request.
3. The application checks can pass, but OBAAF reports `OBAAF-GHA-008` and blocks
   the merge because the action reference is mutable.
4. Restore the full SHA `1af3b93b6815bc44a9784bd300feb67ff0d1eeb3` and push the fix.
5. Wait for CI and the subsequent OBAAF audit to pass before merging.

This demonstration does not require exposing secrets or running malicious code.
It shows why a configuration audit provides a different check from building the
application.
