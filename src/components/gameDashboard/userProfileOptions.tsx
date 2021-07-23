import React from "react";
import me from "./assets/_me.jpg";
import GameDashboardUserAvatar from "./userAvatar";

const UserProfileOptions = () => (
  <div className="userProfileOptions">
    <GameDashboardUserAvatar imageFile={me} />
  </div>
);

export default UserProfileOptions;
