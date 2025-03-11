import {
  getStringsForI18nBundleFromResource,
  I18nBundle,
} from "@howso/ui-internationalization-utils";
import { Languages } from "../../../constants";

const namespace = "LoginPage";

const en = {
  title: "Login",
  form: {
    fields: {
      username: {
        label: "Username",
        placeholder: "john.smith",
      },
      email: {
        label: "Email",
        placeholder: "john.smith@example.com",
      },
      password: {
        label: "Password",
        placeholder: "nonsensical placeholder values",
      },
    },
    actions: {
      login: "Login",
    },
  },
};

type Resource = typeof en;

export const LoginPageI18nBundle: I18nBundle<Languages, Resource> = {
  namespace,
  resources: { en },
  strings: getStringsForI18nBundleFromResource<Resource>(en),
};
