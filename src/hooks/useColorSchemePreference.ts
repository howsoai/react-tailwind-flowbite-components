import { useEffect, useRef, useState } from "react";

type ColorScheme = "dark" | "light";

/** Provides the user's color scheme preference and subscribes to changes. */
export const useColorSchemePreference = (): ColorScheme => {
  const match = useRef<MediaQueryList>(
    window.matchMedia("(prefers-color-scheme: light)"),
  );
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    match.current.matches ? "light" : "dark",
  );

  useEffect(() => {
    const currentMatch = match.current;
    const onColorSchemeChange = () => {
      const scheme = currentMatch.matches ? "light" : "dark";
      setColorScheme(scheme);
    };

    currentMatch.addEventListener("change", onColorSchemeChange);
    return () =>
      currentMatch.removeEventListener("change", onColorSchemeChange);
  }, [match]);

  return colorScheme;
};
