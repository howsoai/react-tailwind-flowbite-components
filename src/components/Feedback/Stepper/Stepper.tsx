import { UX } from "@/constants";
import {
  cloneElement,
  isValidElement,
  type ComponentProps,
  type FC,
  type ReactNode,
} from "react";
import { twMerge } from "tailwind-merge";
import { StepperContent } from "./StepperContent";
import { StepperContext } from "./StepperContext";
import { StepperIcon } from "./StepperIcon";
import { StepperItem } from "./StepperItem";
import { StepperItems } from "./StepperItems";
import { StepperProgress } from "./StepperProgress";
import { StepperSpacer } from "./StepperSpacer";

export type StepperProps = ComponentProps<"div"> & {
  /** Children will be included inside <Stepper.Items /> See <Stepper.Item /> */
  children: ReactNode;
  /** Default: <Stepper.Items /> in which children will be inserted */
  Items?: ReactNode;
  marginBottom?: boolean;
  /** Renders the container as a <nav /> to for accessibility. This necessitates the use of a least one <a /> in items  */
  nav?: boolean;
  /** Default: <Stepper.Progress />  */
  Progress?: ReactNode;
  /** Default: 0 */
  step?: number;
  /** The number of steps. If provided, a progress indicator will be rendered. */
  steps?: number;
  /** Default: false */
  vertical?: boolean;
};

const StepperComponent: FC<StepperProps> = ({
  children,
  className,
  Items,
  marginBottom,
  nav,
  Progress,
  step = 0,
  steps,
  vertical,
  ...props
}) => {
  const Tag = nav ? "nav" : "section";
  const progress = !!steps ? (step + 1 / steps) * 100 : undefined;
  const RenderedProgress: FC = () =>
    typeof progress === "number" &&
    (isValidElement(Progress) ? (
      // @ts-expect-error Unknown props
      cloneElement(Progress, { progress })
    ) : (
      <Stepper.Progress progress={progress} />
    ));

  return (
    <StepperContext.Provider value={{ vertical, step }}>
      <Tag
        data-testid="stepper-component"
        {...props}
        className={twMerge(className, marginBottom && UX.classes.marginBottom)}
      >
        {!!vertical && <RenderedProgress />}
        {Items ? (
          Items
        ) : (
          <StepperItems
            className={twMerge(
              "flex gap-5",
              !!vertical && "justify-left flex-col",
              !!vertical && typeof progress === "number" && "mt-2",
              !vertical && "w-full items-center justify-center",
              !vertical && typeof progress === "number" && "mb-2",
            )}
          >
            {children}
          </StepperItems>
        )}
        {!vertical && <RenderedProgress />}
      </Tag>
    </StepperContext.Provider>
  );
};

StepperComponent.displayName = "Stepper";
StepperItems.displayName = "Stepper.Items";
StepperItem.displayName = "Stepper.Item";
StepperContent.displayName = "Stepper.Content";
StepperIcon.displayName = "Stepper.Icon";
StepperSpacer.displayName = "Stepper.Spacer";
StepperProgress.displayName = "Stepper.Progress";

export const Stepper = Object.assign(StepperComponent, {
  Items: StepperItems,
  Item: StepperItem,
  Content: StepperContent,
  Icon: StepperIcon,
  Spacer: StepperSpacer,
  Progress: StepperProgress,
});
