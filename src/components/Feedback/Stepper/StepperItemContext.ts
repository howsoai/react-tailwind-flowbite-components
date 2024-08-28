import { createContext, useContext } from "react";

export type StepperItemContext = {
  status?: "active" | "done";
};

export const StepperItemContext = createContext<StepperItemContext | undefined>(
  undefined,
);

export function useStepperItemContext(): StepperItemContext {
  const context = useContext(StepperItemContext);

  if (!context) {
    throw new Error(
      "useStepperItemContext should be used within the StepperItemContext provider!",
    );
  }

  return context;
}
