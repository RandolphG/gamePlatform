import React from "react";

const PlayerImg = ({ imageFile }: any) => (
  <div className="profileInfo_container_avatarSection_imageSection_imageContainer">
    <img
      className="profileInfo_container_avatarSection_imageSection_imageContainer_image"
      src={imageFile}
      alt="profile_img"
    />
  </div>
);

export default PlayerImg;
