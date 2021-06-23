import React, { ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { input, stayLoggedIn } from "../motionSettings";
import SignInButton from "./signInButton";
import { Link } from "react-router-dom";

interface IInputField {
  credentials: { userName: string; email: string; password: string };
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  inputType: any;
  showPassword: () => void;
}

const Input = ({
  handleChange,
  handleSubmit,
  credentials,
  showPassword,
  inputType,
}: IInputField) => {
  const Inputfield = () => (
    <motion.div>
      <div className="input-group">
        <input
          className="input-group__input"
          onChange={handleChange}
          value={credentials.userName}
          type="text"
          name="userName"
          id="userName"
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
        <span className="input-group__password_show" onClick={showPassword}>
          {inputType === "text" ? "Hide" : "show"}
        </span>
      </div>
    </motion.div>
  );

  const StayLoggedIn = () => (
    <motion.div {...stayLoggedIn} className="login-options">
      <label className="label">
        <input className="remember-me" type="checkbox" /> Remember Me
      </label>
    </motion.div>
  );

  return (
    <form {...input} className="form" onSubmit={handleSubmit}>
      {Inputfield()}
      {StayLoggedIn()}
      {SignInButton()}
      <div className="alternate-section">
        <motion.p className="alternate-section__forget-password">
          <a href="#">Forgot Password?</a>
        </motion.p>
        <motion.p className="alternate-section__signup">
          <Link to="/signUp">Sign up</Link>
        </motion.p>
      </div>
    </form>
  );
};

export default Input;
