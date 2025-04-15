import { StoryContext } from "@storybook/react";
import { darkBackground } from "./constants";

export const isDarkBackground = (context: StoryContext<any>): boolean => {
  console.info(
    "context.globals?.backgrounds?.value",
    context.globals?.backgrounds?.value,
  );
  console.info(
    "context.userGlobals?.backgrounds?.value",
    context.userGlobals?.backgrounds?.value,
  );
  console.info("darkBackground", darkBackground);
  const isDark =
    context.globals?.backgrounds?.value === darkBackground.name ||
    context.userGlobals?.backgrounds?.value === darkBackground.name;
  console.info("is dark", isDark);

  return isDark;
};
