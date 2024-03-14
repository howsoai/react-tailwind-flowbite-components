import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { CriticalErrorGraphic } from "../CriticalErrorGraphic";
import { ReadabilityConstraint } from "../../Typography";

export type GraphicalErrorLevel = "critical";
export type GraphicalErrorProps = {
  description?: ReactNode;
  className?: string;
  level: GraphicalErrorLevel;
  heading: ReactNode;
};

export const GraphicalError: FC<GraphicalErrorProps> = function ({
  description,
  className,
  level,
  heading,
}) {
  return (
    <section
      className={twMerge(
        "flex flex-col gap-16 items-center justify-center",
        className
      )}
    >
      <header>{getGraphic(level)}</header>
      <div className="flex flex-col gap-6 items-center justify-center">
        <h2 className="text-4xl font-bold  text-gray-500 dark:text-gray-400">
          {heading}
        </h2>
        {description && (
          <ReadabilityConstraint>{description}</ReadabilityConstraint>
        )}
      </div>
    </section>
  );
};

const getGraphic = (level: GraphicalErrorLevel) => {
  const className = "max-h-[33vh]";
  switch (level) {
    default:
      return <CriticalErrorGraphic className={className} />;
  }
};
