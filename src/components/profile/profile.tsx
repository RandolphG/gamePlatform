import React, { useState } from "react";
import { motion } from "framer-motion";
import { SideList } from "../gameDashboard";
import image from "./assets/_default_profile_img.png";
import { LeaderBoard, ProfileInfo } from "./components";
import { profileMotionSettings } from "./motionSettings";
import "./styles/_profileStyles.scss";

const Profile = () => {
  const [imageFile, s] = useState(image);

  return (
    <div className="profileContainer">
      <motion.div {...profileMotionSettings} className="profile" key="profile">
        <LeaderBoard />
        <ProfileInfo imageFile={imageFile} />
      </motion.div>
      <SideList />
    </div>
  );
};

export default Profile;
