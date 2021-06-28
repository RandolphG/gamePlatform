import React from "react";
import {
  Badges,
  GamePlayStats,
  Level,
  PercentageStats,
  PlayerImg,
  PlayerStatus,
  Rank,
  Xp,
  Title,
} from "./components";

const ProfileInfo = ({ imageFile }: any) => {
  return (
    <div className="profileInfo">
      <Title />
      <div className="profileInfo_container">
        <div className="profileInfo_container_avatarSection">
          <Rank />
          <span className="profileInfo_container_avatarSection_imageSection">
            <PlayerImg imageFile={imageFile} />
            <Level />
          </span>
        </div>
        <PlayerStatus />
        <Xp />
        <PercentageStats />
        <GamePlayStats />
        <Badges />
      </div>
    </div>
  );
};

export default ProfileInfo;
