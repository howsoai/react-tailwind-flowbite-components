import * as react from "@floating-ui/react";
import { Dispatch, SetStateAction } from "react";
// @ts-expect-error
import * as helpers from "../utils/floating.js";

type UseBaseFLoatingParams = {
  open?: boolean;
  arrowRef?: any;
  placement?: react.Placement;
  setOpen?: Dispatch<SetStateAction<boolean>>;
};
export const useBaseFloating = ({
  open,
  arrowRef,
  placement = "top",
  setOpen,
}: UseBaseFLoatingParams) => {
  return react.useFloating({
    placement: helpers.getPlacement({ placement }),
    open,
    onOpenChange: setOpen,
    whileElementsMounted: react.autoUpdate,
    middleware: helpers.getMiddleware({ placement, arrowRef }),
  });
};

type UseFloatingInteractionsParams = {
  context: react.FloatingRootContext;
  trigger: "click" | "hover";
  role: react.UseRoleProps["role"];
  interactions: Array<react.ElementProps | void>;
};
export const useFloatingInteractions = ({
  context,
  trigger,
  role = "tooltip",
  interactions = [],
}: UseFloatingInteractionsParams) => {
  return react.useInteractions([
    react.useClick(context, { enabled: trigger === "click" }),
    react.useHover(context, {
      enabled: trigger === "hover",
      handleClose: react.safePolygon(),
    }),
    react.useDismiss(context),
    react.useRole(context, { role }),
    ...interactions,
  ]);
};
