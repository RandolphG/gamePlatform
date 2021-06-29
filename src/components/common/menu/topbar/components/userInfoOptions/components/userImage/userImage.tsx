// @ts-nocheck
import React from "react";
import { UserImageViewModel } from "./userImageViemModel";
import "./styles/_userImage.scss";

/* TODO
 *  react forms: tools for input manipulation
 *  */

/**
 * editable user profile image
 * @returns {JSX.Element}
 * @constructor
 */
const UserImage = ({ image }: any) => {
  const { imageFile, fileInputRef, handleFileInput } = UserImageViewModel();

  const useThisImage = () => {
    if (image) {
      console.log(`there is local image`);
      return image;
    }

    return imageFile;
  };

  const thisImage = useThisImage();

  return (
    <div className="userProfile">
      <img
        onClick={(e) => {
          fileInputRef.current && fileInputRef.current.click();
        }}
        className="userProfile__img"
        src={thisImage}
        alt="profile_img"
      />
      <input
        ref={fileInputRef}
        style={{ display: "none" }}
        id="photo-upload"
        type="file"
        accept="image/*"
        onChange={handleFileInput}
      />
    </div>
  );
};

export default UserImage;
