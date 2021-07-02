import React from "react";

const GameDashboardUserAvatar = ({ imageFile }: any) => (
  <div className="userAvatar">
    <img className="userAvatar__image" src={imageFile} alt="profile_img" />
  </div>
);

export default GameDashboardUserAvatar;
