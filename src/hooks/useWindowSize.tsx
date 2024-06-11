import { useState, useCallback, useMemo, useLayoutEffect } from "react";
import { debounce } from "lodash";
import { OmitFirst } from "../types";

interface WindowSize {
  width: number;
  height: number;
  ratio: number;
}

type DebounceArgs = OmitFirst<Parameters<typeof debounce>>;

export type UseWindowSizeParams = {
  /** Lodash debounce args */
  debounceArgs?: DebounceArgs;
};

/**
 * Subscribes to changes to the window size as a state object.
 */
export const useWindowSize = (
  /** You must use a static object, or useMemo to avoid infinate render loops. */
  params: UseWindowSizeParams = {}
): WindowSize => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: 1,
    height: 1,
    ratio: 1,
  });

  const _handleResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
      ratio: Number((window.innerHeight / window.innerWidth).toFixed(2)),
    });
  }, [setWindowSize]);
  const handleResize = useMemo(
    () =>
      params.debounceArgs
        ? debounce(_handleResize, ...params.debounceArgs)
        : _handleResize,
    [params.debounceArgs, _handleResize]
  );

  useLayoutEffect(() => {
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    _handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [_handleResize, handleResize]); // Empty array ensures that effect is only run on mount

  return windowSize;
};
