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
    const onColorSchemeChange = () => {
      const scheme = match.current.matches ? "light" : "dark";
      setColorScheme(scheme);
    };

    match.current.addEventListener("change", onColorSchemeChange);
    return () =>
      match.current.removeEventListener("change", onColorSchemeChange);
  }, [match]);

  return colorScheme;
};
