import type { FC } from "react";
import { PropertyLabel, type PropertyLabelProps } from "./PropertyLabel";

export const EndedByLabel: FC<Omit<PropertyLabelProps, "property">> = (
  props,
) => <PropertyLabel {...props} property={"endedBy"} />;
