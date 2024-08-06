"use client";

import {
  type FlowbiteTextInputColors,
  type FlowbiteTheme,
  getTheme,
} from "flowbite-react";
import type { ComponentProps, FC, ReactNode, Reducer } from "react";
import { useCallback, useEffect, useReducer } from "react";
import { twMerge } from "tailwind-merge";
import { FileDropZoneContent } from "./FileDropZoneContent";

export type FileDropZoneProps = Omit<
  ComponentProps<"div">,
  "children" | "onDrop"
> & {
  /** See <FileDropZone.Content /> */
  children: ReactNode;
  color?: keyof FlowbiteTextInputColors;
  disabled?: boolean;
  /** A style prop to override the global hook in useLayoutEffect. Mostly for testing. */
  isDragging?: boolean;
  /** A style prop to override the global hook in useLayoutEffect. Mostly for testing. */
  isHovered?: boolean;
  onDrop: NonNullable<ComponentProps<"div">["onDrop"]>;
};

/**
 * Provides drag area suggestions and drop integration.
 * You must pair this component with another that handles your specific requirements.
 **/
const FileDropZoneComponent: FC<FileDropZoneProps> = ({
  children,
  color = "grey",
  disabled,
  isDragging,
  isHovered,
  onDrag: onDragProp,
  onDrop: onDropProp,
  ...props
}) => {
  const theme = getTheme();

  const [state, dispatch] = useReducer(reducer, defaultState);

  const onDragEnter = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();

      dispatch({
        type: "addDepth",
        eventType: event.type,
        target: event.target,
      });
      onDragProp && onDragProp(event);
    },
    [onDragProp],
  );

  const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  }, []);

  const onDragLeave = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();

      dispatch({
        type: "decreaseDepth",
        eventType: event.type,
        target: event.target,
      });
      onDragProp && onDragProp(event);
    },
    [onDragProp],
  );

  const onDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();

      dispatch({ type: "reset" });
      onDropProp && onDropProp(event);
    },
    [onDropProp],
  );

  useEffect(() => {
    if (disabled) {
      return;
    }

    const onDragEnter = (event: globalThis.DragEvent) => {
      event.preventDefault();
      event.stopPropagation();
      dispatch({
        type: "addBodyDepth",
        eventType: event.type,
        target: event.target,
      });
    };
    const onDragLeave = (event: globalThis.DragEvent) => {
      event.preventDefault();
      event.stopPropagation();
      dispatch({
        type: "decreaseBodyDepth",
        eventType: event.type,
        target: event.target,
      });
    };

    window.addEventListener("dragenter", onDragEnter);
    window.addEventListener("dragleave", onDragLeave);
    return () => {
      window.removeEventListener("dragenter", onDragEnter);
      window.removeEventListener("dragleave", onDragLeave);
    };
  }, [disabled]);

  return (
    <div
      {...props}
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      className={getClassName({
        color,
        disabled,
        isDragging,
        isHovered,
        state,
        theme,
      })}
    >
      {children}
    </div>
  );
};

// eslint-disable-next-line complexity
const getClassName = ({
  color = "gray",
  disabled,
  isDragging,
  isHovered,
  state,
  theme,
}: Pick<
  FileDropZoneProps,
  "color" | "disabled" | "isDragging" | "isHovered"
> & {
  state: State;
  theme: FlowbiteTheme;
}): string =>
  twMerge(
    "rounded-lg border-[3px] border-dashed transition",
    disabled &&
      "pointer-events-none cursor-not-allowed select-none *:opacity-50",
    color && theme.textInput.field.input.colors[color],
    (isDragging || state.isDragging) &&
      "bg-primary-200 text-primary-900 dark:bg-primary-700 dark:text-primary-100",
    (isHovered || state.isHovered) &&
      theme.textInput.field.input.colors[color] + " scale-[1.05]",
  );

export const FileDropZone = Object.assign(FileDropZoneComponent, {
  Content: FileDropZoneContent,
});

type StateAction =
  | { type: "reset" }
  | {
      type: "addDepth";
      eventType: any;
      target?: EventTarget | null;
    }
  | {
      type: "decreaseDepth";
      eventType: any;
      target?: EventTarget | null;
    }
  | {
      type: "addBodyDepth";
      eventType: any;
      target?: EventTarget | null;
    }
  | {
      type: "decreaseBodyDepth";
      eventType: any;
      target?: EventTarget | null;
    };

type State = {
  depth: number;
  bodyDepth: number;
  isDragging: boolean;
  isHovered: boolean;
};
const defaultState: State = {
  depth: 0,
  bodyDepth: 0,
  isDragging: false,
  isHovered: false,
};
const reducer: Reducer<State, StateAction> = (state, action) => {
  let depth: number;
  switch (action.type) {
    case "reset":
      return defaultState;
    // Drop zone interactions
    case "addDepth":
      depth = state.depth + 1;
      return {
        ...state,
        depth,
        isHovered: depth > 0,
      };
    case "decreaseDepth":
      depth = state.depth - 1;
      return {
        ...state,
        depth,
        isHovered: depth > 0,
      };
    // Window interactions
    case "addBodyDepth":
      depth = state.bodyDepth + 1;
      return {
        ...state,
        bodyDepth: depth,
        isDragging: depth > 0 || state.depth > 0,
      };
    case "decreaseBodyDepth":
      depth = state.bodyDepth - 1;
      return {
        ...state,
        bodyDepth: depth,
        isDragging: depth > 0 || state.depth > 0,
      };
  }
};
