"use strict";

import * as react from "@floating-ui/react";

export const getMiddleware = ({ arrowRef, placement }) => {
  const middleware = [];
  middleware.push(react.offset(8));
  middleware.push(placement === "auto" ? react.autoPlacement() : react.flip());
  middleware.push(react.shift({ padding: 8 }));
  if (arrowRef?.current) {
    middleware.push(react.arrow({ element: arrowRef.current }));
  }
  return middleware;
};

export const getPlacement = ({ placement }) => {
  return placement === "auto" ? void 0 : placement;
};

export const getArrowPlacement = ({ placement }) => {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right",
  }[placement.split("-")[0]];
};
