import React, { memo } from "react";
import { Link } from "react-router-dom";
import { SignUpViewModel } from "./signUpVeiwModel";

const Signup: React.FC = memo(() => {
  const { showPassword, inputType, handleChange, credentials, handleSubmit } =
    SignUpViewModel();

  /*TODO change to refs of input elements*/

  const Terms = () => (
    <div>
      <label>
        <input type="checkbox" /> Creating an account means you’re okay with our
        <a href="#">Terms of Service, Privacy Policy</a>, and our default{" "}
        <a href="#">Notification Settings</a>.
      </label>
    </div>
  );

  const CreateAccountButton = () => (
    <button type="submit">Create Account</button>
  );

  const SignIn = () => (
    <div>
      <label>
        Already have an account?
        <Link
          to="/intro"
          /*
          onClick={() => {
            history.push("/#intro");
          }}
          href="#"*/
        >
          Sign in
        </Link>
      </label>
    </div>
  );

  return (
    <div key="signup">
      <div>
        <h3>Sign up to _default</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <input
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
          <Terms />
          <CreateAccountButton />
          <SignIn />
        </form>
      </div>
    </div>
  );
});

export default Signup;
