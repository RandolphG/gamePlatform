import React from "react";
import { motion } from "framer-motion";
import { topbar } from "./motionSettings";
import { UserInfoOptions } from "./components";
import "./styles/_topbar.scss";

const Topbar = () => (
  <motion.div {...topbar} className="topbar" key="topbar">
    <UserInfoOptions />
  </motion.div>
);

export default Topbar;
