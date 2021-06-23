import React, { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { signInButton } from "../loginLayout/motionSettings";
import { signupLayout } from "./motionSettings";
import { SignUpViewModel } from "./signUpVeiwModel";
import "./styles/_signUpStyles.scss";

interface ISignup {}

const Signup: React.FC<ISignup> = memo(() => {
  const { showPassword, inputType, handleChange, credentials, handleSubmit } =
    SignUpViewModel();

  /*TODO change to refs of input elements*/

  const Terms = () => (
    <div className="terms">
      <label className="terms__label">
        <input className="terms__description" type="checkbox" /> Creating an
        account means you’re okay with our
        <a href="#">Terms of Service, Privacy Policy</a>, and our default{" "}
        <a href="#">Notification Settings</a>.
      </label>
    </div>
  );

  const CreateAccountButton = () => (
    <motion.button
      {...signInButton}
      className="button__signin-button"
      type="submit"
    >
      Create Account
    </motion.button>
  );

  const SignIn = () => (
    <div className="alternate-section">
      <span className="alternate-section__forget-password">
        Already have an account?
      </span>
      <Link className="alternate-section__signup" to="/intro">
        Sign in
      </Link>
    </div>
  );

  return (
    <div key="signup" className="signUp">
      <motion.div {...signupLayout} className="signUp_border">
        <div className="login_border__container">
          <form className="form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                className="input-group__input"
                onChange={handleChange}
                value={credentials.username}
                type="text"
                name="username"
                id="username"
                placeholder="&nbsp;"
                autoComplete="off"
                required
              />
              <label className="input-group__label">Username</label>
            </div>
            <div className="input-group">
              <input
                className="input-group__input"
                onChange={handleChange}
                type="text"
                name="email"
                id="email"
                value={credentials.email}
                placeholder="&nbsp;"
                required
              />
              <label className="input-group__label">Email</label>
            </div>
            <div className="input-group">
              <input
                className="input-group__input"
                onChange={handleChange}
                value={credentials.password}
                type={inputType}
                name="password"
                id="password"
                placeholder="&nbsp;"
                required
              />
              <label className="input-group__label">Password</label>
              <span
                className="input-group__password_show"
                onClick={showPassword}
              >
                {inputType === "text" ? "Hide" : "show"}
              </span>
            </div>
            <Terms />
            <CreateAccountButton />
            <SignIn />
          </form>
        </div>
      </motion.div>
    </div>
  );
});

export default Signup;
