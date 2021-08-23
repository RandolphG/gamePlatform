import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../../common";

const motionSettings = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

const Information = () => {
  return (
    <motion.div
      key="information"
      {...motionSettings}
      style={{
        background: "transparent",
        boxSizing: "border-box",
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          margin: ".5rem 0",
          padding: "1rem 0",
        }}
      >
        <div style={{ width: "20%", height: "10%" }}>
          <Button title="button 1" />
        </div>
        <div style={{ width: "20%", height: "10%" }}>
          <Button title="button 2" />
        </div>
        <div style={{ width: "20%", height: "10%" }}>
          <Button title="button 3" />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          padding: "1rem 0",
        }}
      >
        <div style={{ width: "20%", height: "10%" }}>
          <Button title="button 1" />
        </div>
        <div style={{ width: "20%", height: "10%" }}>
          <Button title="button 2" />
        </div>
        <div style={{ width: "20%", height: "10%" }}>
          <Button title="button 3" />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          margin: ".5rem 0",
          padding: "1rem 0",
        }}
      >
        <div style={{ width: "15%", height: "10%" }}>
          <Button title="button 1" />
        </div>
        <div style={{ width: "15%", height: "10%" }}>
          <Button title="button 2" />
        </div>
        <div style={{ width: "15%", height: "10%" }}>
          <Button title="button 3" />
        </div>
        <div style={{ width: "15%", height: "10%" }}>
          <Button title="button 4" />
        </div>
        <div style={{ width: "15%", height: "10%" }}>
          <Button title="button 5" />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          padding: "1rem 0",
        }}
      >
        <div style={{ width: "20%", height: "10%" }}>
          <Button title="button 1" />
        </div>
        <div style={{ width: "20%", height: "10%" }}>
          <Button title="button 2" />
        </div>
      </div>
    </motion.div>
  );
};

export default Information;
