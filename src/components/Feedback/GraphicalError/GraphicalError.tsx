import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { ErrorGraphic, ErrorGraphicType } from "../ErrorGraphic";
import { Paragraph, ReadabilityConstraint } from "../../Typography";

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
        "flex flex-col items-center justify-center sm:gap-2 md:gap-4 lg:gap-8 xl:gap-16",
        className
      )}
    >
      <header
        className={"*:h-full max-h-[50vh] sm:h-12 md:h-[33vh] xl:h-[50vh]"}
      >
        <ErrorGraphic type={type} className={className} />
      </header>

      <ReadabilityConstraint
        className={twMerge(
          "flex flex-col gap-3 md:gap-6 items-center justify-center"
        )}
      >
        <Paragraph className="text-4xl font-bold text-gray-500 dark:text-gray-400">
          {heading}
        </Paragraph>
        {description && (
          <div className="text-gray-800 dark:text-gray-300">{description}</div>
        )}
      </ReadabilityConstraint>
    </section>
  );
};
