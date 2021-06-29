import React, { useState } from "react";
import { motion } from "framer-motion";
import image from "./assets/_default_profile_img.png";
import { LeaderBoard } from "./components/leaderBoard";
import { profileMotionSettings } from "./motionSettings";
import { ProfileInfo } from "./components/profileInfo";
import "./styles/_profileStyles.scss";

const Profile = () => {
  const [imageFile, s] = useState(image);

  return (
    <motion.div {...profileMotionSettings} className="profile" key="profile">
      {/*<Header />*/}
      <LeaderBoard />
      <ProfileInfo imageFile={imageFile} />
    </motion.div>
  );
};

export default Profile;
