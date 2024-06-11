import { useTranslation } from "react-i18next";

export const defaultTranslationNamespace = "react-tailwind-flowbite-components";

/** Returns a translation function defaulted to this package's namespace */
export const useDefaultTranslation = (
  options?: Parameters<typeof useTranslation>[1]
) => useTranslation(defaultTranslationNamespace, options);
