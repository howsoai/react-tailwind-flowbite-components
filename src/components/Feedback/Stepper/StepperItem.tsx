import type { ComponentProps, FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { useStepperContext } from "./StepperContext";
import { StepperItemContext } from "./StepperItemContext";

export type StepperItemProps = ComponentProps<"li"> & {
  children: ReactNode;
  position: number | [number, number];
};

export const StepperItem: FC<StepperItemProps> = function ({
  children,
  className,
  position,
}) {
  const { vertical, step } = useStepperContext();
  let status: "active" | "done" | undefined;
  if (typeof position === "number") {
    status =
      step === position ? "active" : step > position ? "done" : undefined;
  } else {
    status =
      position[0] <= step && position[1] >= step
        ? "active"
        : step > position[1]
          ? "done"
          : undefined;
  }

  return (
    <StepperItemContext.Provider value={{ status }}>
      <li
        className={twMerge(
          vertical && "flex items-center space-x-2.5",
          !vertical &&
            "flex flex-col items-center space-y-2.5 sm:flex-row sm:space-x-2.5 sm:space-y-0",
          className,
        )}
      >
        {children}
      </li>
    </StepperItemContext.Provider>
  );
};
