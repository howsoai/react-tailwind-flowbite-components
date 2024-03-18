import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { ErrorGraphic, ErrorGraphicType } from "../ErrorGraphic";
import { ReadabilityConstraint } from "../../Typography";

export type GraphicalErrorProps = {
  description?: ReactNode;
  className?: string;
  heading: ReactNode;
  type: ErrorGraphicType;
};

export const GraphicalError: FC<GraphicalErrorProps> = function ({
  description,
  className,
  type,
  heading,
}) {
  return (
    <section
      className={twMerge(
        "flex flex-col gap-16 items-center justify-center",
        className
      )}
    >
      <header>
        <ErrorGraphic type={type} className={className} />
      </header>
      <div className="flex flex-col gap-6 items-center justify-center">
        <h2 className="text-4xl font-bold text-gray-500 dark:text-gray-400">
          {heading}
        </h2>
        {description && (
          <ReadabilityConstraint className="text-gray-800 dark:text-gray-300">
            {description}
          </ReadabilityConstraint>
        )}
      </div>
    </section>
  );
};
