import React, { useState } from "react";
import { motion } from "framer-motion";
import image from "./assets/_default_profile_img.png";
import { LeaderBoard } from "./leaderBoard";
import { profileMotionSettings } from "./motionSettings";
import { ProfileInfo } from "./profileInfo";
import "./styles/_profileStyles.scss";

const Profile = () => {
  const [imageFile, s] = useState(image);

  return (
    <motion.div {...profileMotionSettings} className="profile" key="profile">
      {/*<Header />*/}
      <div className="profile_headerLabel">Home</div>
      <LeaderBoard />
      <ProfileInfo imageFile={imageFile} />
    </motion.div>
  );
};

export default Profile;
