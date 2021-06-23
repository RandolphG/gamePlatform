import { motion } from "framer-motion";
import React, { FC } from "react";
import { loginLayout } from "./motionSettings";
import "./styles/_loginLayout.scss";
import ErrorBoundary from "../../../../ErrorBoundary";
import { Divider, Input, Social } from "./components";
import { LoginLayoutViewModel } from "./loginLayoutViewModel";

interface ILoginLayout {}

const LoginLayout: FC<ILoginLayout> = () => {
  const { handleSubmit, handleChange, credentials, showPassword, inputType } =
    LoginLayoutViewModel();

  return (
    <ErrorBoundary>
      <motion.div {...loginLayout} key="login" className="login">
        <div className="login_border">
          <div className="login_border__container">
            {Social()}
            {Divider()}
            {Input({
              handleSubmit,
              handleChange,
              credentials,
              showPassword,
              inputType,
            })}
          </div>
        </div>
      </motion.div>
    </ErrorBoundary>
  );
};

export default LoginLayout;
