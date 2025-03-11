import { useThemeMode } from "flowbite-react";
import { FC, SVGProps, useMemo } from "react";

export type HowsoLogoSquareProps = SVGProps<SVGSVGElement> & {
  background?: "dark" | "light" | undefined | null;
};
export const HowsoLogoSquareComponent: FC<HowsoLogoSquareProps> = ({
  background,
  ...props
}) => {
  const themeMode = useThemeMode();
  const isBackgroundDark = useMemo(() => {
    if (background) {
      return background === "dark";
    }

    return themeMode.computedMode === "dark";
  }, [background, themeMode.computedMode]);

  return isBackgroundDark ? (
    <HowsoLogoSquareLight {...props} />
  ) : (
    <HowsoLogoSquareDark {...props} />
  );
};

/**
 * A light rendering of the logo, designed for dark backgrounds.
 */
const HowsoLogoSquareLight: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 96 97"
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="m30.933 79.41 15.2-44.206 9.263 26.935 5.194-15.694-9.684-29.17h-9.191l-15.2 45.789-14.76-45.614H0l21.566 61.96h9.367Z"
      clipRule="evenodd"
    />
    <path
      fill="#3E63DD"
      fillRule="evenodd"
      d="M84.754 12H96L70.97 84.686H60.698L84.754 12Z"
      clipRule="evenodd"
    />
  </svg>
);

/**
 * A dark rendering of the logo, designed for light backgrounds.
 */
const HowsoLogoSquareDark: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 96 97"
    fill="none"
    {...props}
  >
    <path
      fill="#202020"
      fillRule="evenodd"
      d="m30.933 79.41 15.2-44.206 9.263 26.935 5.194-15.694-9.684-29.17h-9.191l-15.2 45.789-14.76-45.614H0l21.566 61.96h9.367Z"
      clipRule="evenodd"
    />
    <path
      fill="#3E63DD"
      fillRule="evenodd"
      d="M84.754 12H96L70.97 84.686H60.698L84.754 12Z"
      clipRule="evenodd"
    />
  </svg>
);

/**
 * Renders the Howso dual tone logo.
 *
 * If the background color is not defined, the user's color scheme preference from browser is used.
 * Does not make assumptions about fill="currentColor" being sufficient, uses the full defined asset.
 */
export const HowsoLogoSquare = Object.assign(HowsoLogoSquareComponent, {
  Light: HowsoLogoSquareLight,
  Dark: HowsoLogoSquareDark,
});
