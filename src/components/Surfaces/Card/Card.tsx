import type { ComponentProps, FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { UX } from "../../../constants";
import { Heading } from "../../Typography";

export type CardProps = PropsWithChildren<ComponentProps<"section">> & {
  marginBottom?: boolean;
};
const CardComponent: FC<CardProps> = ({
  children,
  className,
  marginBottom,
  ...props
}) => {
  return (
    <section
      data-testid="card-component"
      className={twMerge(
        "rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
        marginBottom && UX.classes.marginBottom,
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
};
CardComponent.displayName = "Card";

export type CardHeaderProps = PropsWithChildren<ComponentProps<"header">> & {
  /** Default: true */
  border?: boolean;
};
/**
 * Standardized header element for cards.
 */
const CardHeader: FC<CardHeaderProps> = ({
  border = true,
  children,
  className,
  ...props
}) => {
  return (
    <header
      className={twMerge(
        "[overflow-wrap:anywhere] dark:border-gray-700 dark:print:border-gray-200",
        contentPadding,
        border && "border-b border-gray-200",
        className,
      )}
      {...props}
    >
      {children}
    </header>
  );
};
CardHeader.displayName = "Card.Header";

export type CardTitleProps = PropsWithChildren<ComponentProps<"h3">> & {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};
/**
 * Standardized heading element for card title.
 * Default: h3, .text-2xl
 */
const CardTitle: FC<CardTitleProps> = ({ level = 3, ...props }) => {
  return (
    <Heading
      {...props}
      level={level}
      className={twMerge("text-2xl", props.className)}
    />
  );
};
CardTitle.displayName = "Card.Title";

export type CardSubtitleProps = PropsWithChildren<ComponentProps<"h4">> & {
  level?: 2 | 3 | 4 | 5 | 6;
};
/**
 * Standardized heading element for card subtitle.
 * Default: h4, .text-lg
 */
const CardSubtitle: FC<CardSubtitleProps> = ({ level = 4, ...props }) => {
  const Heading = `h${level}`;

  return (
    <Heading
      {...props}
      // @ts-expect-error Dynamic typing, it's there.
      className={twMerge("text-lg", props.className)}
    />
  );
};
CardSubtitle.displayName = "Card.Subtitle";

export type CardContentProps = PropsWithChildren<ComponentProps<"div">>;
const CardContent: FC<CardContentProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={twMerge(contentPadding, className)} {...props}>
      {children}
    </div>
  );
};
CardContent.displayName = "Card.Content";

const contentPadding = "p-4";

export const Card = Object.assign(CardComponent, {
  Header: CardHeader,
  Title: CardTitle,
  Subtitle: CardSubtitle,
  Content: CardContent,
});
