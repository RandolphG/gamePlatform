import React, { ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { input, stayLoggedIn } from "../motionSettings";
import SignInButton from "./signInButton";

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
    <motion.div {...input} className="input-group">
      <input
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
      <div>
        <input
          onChange={handleChange}
          type="text"
          name="email"
          id="email"
          value={credentials.email}
          placeholder="&nbsp;"
          required
        />
        <label>Email</label>
      </div>
      <div>
        <input
          onChange={handleChange}
          value={credentials.password}
          type={inputType}
          name="password"
          id="password"
          placeholder="&nbsp;"
          required
        />
        <label>Password</label>
        <span onClick={showPassword}>
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
    <form className="form" onSubmit={handleSubmit}>
      <motion.div {...input} className="input-group">
        {Inputfield()}
      </motion.div>
      {StayLoggedIn()}
      {SignInButton()}
    </form>
  );
};

export default Input;
