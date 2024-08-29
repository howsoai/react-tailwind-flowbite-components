import { createContext, useContext } from "react";

export type IStepperContext = {
  vertical?: boolean;
  step: number;
};

export const StepperContext = createContext<IStepperContext | undefined>(
  undefined,
);

export function useStepperContext(): IStepperContext {
  const context = useContext(StepperContext);

  if (!context) {
    throw new Error(
      "useStepperContext should be used within the StepperContext provider!",
    );
  }

  return context;
}
