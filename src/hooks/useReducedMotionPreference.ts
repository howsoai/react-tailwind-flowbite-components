import { useEffect, useRef, useState } from "react";

/** Provides the user's reduced motion preference and subscribes to changes. */
export const useReducedMotionPreference = (): boolean => {
  const match = useRef<MediaQueryList>(
    window.matchMedia("(prefers-reduced-motion)"),
  );
  const [isReducedPreferred, setIsReducedPreferred] = useState(
    !!match.current.matches,
  );

  useEffect(() => {
    const currentMatch = match.current;
    const onChange = () => {
      setIsReducedPreferred(!!currentMatch.matches);
    };

    currentMatch.addEventListener("change", onChange);
    return () => currentMatch.removeEventListener("change", onChange);
  }, [match]);

  return isReducedPreferred;
};
