import { createContext, useContext } from "react";

export type IStepperItemContext = {
  status?: "active" | "done";
};

export const StepperItemContext = createContext<
  IStepperItemContext | undefined
>(undefined);

export function useStepperItemContext(): IStepperItemContext {
  const context = useContext(StepperItemContext);

  if (!context) {
    throw new Error(
      "useStepperItemContext should be used within the StepperItemContext provider!",
    );
  }

  return context;
}
