import { motion } from "framer-motion";
import React from "react";
import { signInButton } from "../motionSettings";

const SignInButton = () => (
  <motion.button
    {...signInButton}
    className="button__signin-button"
    type="submit"
  >
    Sign in
  </motion.button>
);

export default SignInButton;
