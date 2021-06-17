import React from "react";
import { useSelector } from "react-redux";
import { UserImage, Time } from "./components";
import "./styles/_userInfo.scss";
import { getUserState } from "../../../../../../app/userInfo";

/**
 * Options for the user
 * @returns {JSX.Element}
 * @constructor
 * @param viewModel
 */

const UserInfoOptions = () => {
  const user: { userName: string } = useSelector(getUserState);
  const UserName = () => <span className="userInfo_name">{user.userName}</span>;

  return (
    <div className="userInfo" key="userInfoOptions">
      <UserName />
      <UserImage />
    </div>
  );
};

export default UserInfoOptions;
