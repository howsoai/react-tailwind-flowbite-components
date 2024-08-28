import { createContext, useContext } from "react";

export type StepperContext = {
  vertical?: boolean;
  step: number;
};

export const StepperContext = createContext<StepperContext | undefined>(
  undefined,
);

export function useStepperContext(): StepperContext {
  const context = useContext(StepperContext);

  if (!context) {
    throw new Error(
      "useStepperContext should be used within the StepperContext provider!",
    );
  }

  return context;
}
