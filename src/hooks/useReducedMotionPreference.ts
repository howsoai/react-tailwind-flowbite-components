import { useEffect, useRef, useState } from "react";

/** Provides the user's reduced motion preference and subscribes to changes. */
export const useReducedMotionPreference = (): boolean => {
  const match = useRef<MediaQueryList>(
    window.matchMedia("(prefers-reduced-motion: reduce)"),
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

/** Returns the 'smooth' behavior, unless the user's preference is prefers-reduced-motion: 'reduce' */
export const useScrollBehaviorPreference = (): ScrollBehavior | undefined => {
  const isReducedMotionPreferred = useReducedMotionPreference();
  return !isReducedMotionPreferred ? "smooth" : undefined;
};
