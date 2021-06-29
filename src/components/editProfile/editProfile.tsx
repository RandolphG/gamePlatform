import React from "react";
import "./styles/_editProfileStyles.scss";

const EditProfile = () => {
  return (
    <div>
      <span>profilePhoto</span>
      <button>upload new picture</button>
      <button>delete</button>
      <span>name inputfield</span>
      <span>location</span>
      <span>bio</span>
      <button>save</button>
    </div>
  );
};

export default EditProfile;
