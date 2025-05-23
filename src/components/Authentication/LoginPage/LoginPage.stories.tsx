// noinspection JSUnusedGlobalSymbols

import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { Card } from "../../Surfaces";
import { Link } from "../../Typography";
import { LoginPage, LoginPageProps } from "./LoginPage";

const onSubmitAction = action("onSubmit");

export default {
  component: LoginPage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  args: {
    type: "username",
    isLoading: false,
    // logo: <AppBarLogo src={imageLogo} />,
    // brandName: <AppBarBrandName src={imageBrandName} />,
    // Can't use argTypes: { onSubmit: action() } - We have to fire the preventDefault().
    onSubmit: (event) => {
      onSubmitAction(event);
    },
  },
} satisfies Meta<typeof LoginPage>;

export const Default: StoryObj<LoginPageProps> = {};

export const WithEveryThing: StoryObj<LoginPageProps> = {
  args: {
    cardHeader: (
      <Card.Header>
        <Card.Title>Howso</Card.Title>
      </Card.Header>
    ),
    resetPassword: <Link href="#">Forgot password?</Link>,
  },
};

export const LogInLoading: StoryObj<LoginPageProps> = {
  args: {
    isLoading: true,
  },
};

export const WithError: StoryObj<LoginPageProps> = {
  args: {
    error: new Error("An example error"),
  },
};
