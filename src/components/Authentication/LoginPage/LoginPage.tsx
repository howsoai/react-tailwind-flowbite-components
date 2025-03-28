import { FunctionComponent } from "react";
import { LogInBackground, LogInCard, LogInCardProps } from "./components";

export type LoginPageProps = LogInCardProps & {};

export const LoginPage: FunctionComponent<LoginPageProps> = (props) => {
  return (
    <div className="flex min-h-[100vh] min-w-[100vw] items-center justify-center">
      <LogInBackground />
      <LogInCard {...props} />
    </div>
  );
};
