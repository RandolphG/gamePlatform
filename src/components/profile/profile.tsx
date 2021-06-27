import React, { memo, useState } from "react";
import { motion } from "framer-motion";
import image from "./assets/_default_profile_img.png";
import { LeaderBoard } from "./leaderBoard";
import { Example, Header } from "./leaderBoard/components";
import { profile } from "./motionSettings";
import "./styles/_profileStyles.scss";
import { ProfileInfo } from "./profileInfo";

const Profile: React.FC = memo(() => {
  const [imageFile, s] = useState(image);

  return (
    <motion.div
      {...profile}
      key="profile"
      className="profile"
      initial="initial"
      animate="visible"
      exit="exit"
    >
      {/*<Header />*/}

      <LeaderBoard />
      <ProfileInfo imageFile={imageFile} />
    </motion.div>
  );
});

export default Profile;
