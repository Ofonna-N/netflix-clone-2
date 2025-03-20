import { useAnimate, type DOMKeyframesDefinition } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  scrollThreshold: number;
  aboveThresholdKeyFrames: DOMKeyframesDefinition;
  belowThresholdKeyframes: DOMKeyframesDefinition;
};
export default function useAnimateOnWindowScroll({
  scrollThreshold,
  aboveThresholdKeyFrames,
  belowThresholdKeyframes,
}: Props) {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const hasScrolledDown = useRef(false);

  useEffect(() => {
    const handleScroll = async () => {
      const scrollTop = window.scrollY;
      if (scrollTop > (scrollThreshold ?? 150) && !hasScrolledDown.current) {
        hasScrolledDown.current = true;

        animate(scope.current, aboveThresholdKeyFrames, {
          duration: 0.5,
          ease: "linear",
        });
      } else if (
        scrollTop < (scrollThreshold ?? 150) &&
        hasScrolledDown.current
      ) {
        hasScrolledDown.current = false;
        animate(scope.current, belowThresholdKeyframes, {
          duration: 0.5,
          ease: "linear",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return [scope] as const;
}
