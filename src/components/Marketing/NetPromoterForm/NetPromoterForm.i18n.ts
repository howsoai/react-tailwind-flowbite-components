import {
  getStringsForI18nBundleFromResource,
  I18nBundle,
} from "@howso/ui-internationalization-utils";
import { Languages } from "../../../constants";

const namespace = "NetPromoterForm";

const en = {
  description:
    "How likely are you to recommend Howso to a friend or colleague?",
  scores: {
    likely: "Very likely",
    unlikely: "Very unlikely",
  },
  message: {
    label: "What was the most important factor for your score?",
    placeholder: "Enter your message here.",
  },
  submit: "Submit",
};

type Resource = typeof en;

export const NetPromoterFormI18nBundle: I18nBundle<Languages, Resource> = {
  namespace,
  resources: { en },
  strings: getStringsForI18nBundleFromResource<Resource>(en),
};
