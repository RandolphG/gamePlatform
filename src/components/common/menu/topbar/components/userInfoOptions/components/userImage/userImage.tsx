// @ts-nocheck
import React, { useRef, useState } from 'react'
import image from './assets/_default_profile_img.png'
import './styles/_userImage.scss'
import { UserImageViewModel } from './userImageViemModel'

/* TODO
 *  react forms: tools for input manipulation
 *  */

/**
 * editable user profile image
 * @returns {JSX.Element}
 * @constructor
 */
const UserImage = () => {
  const { imageFile, fileInputRef, handleFileInput } = UserImageViewModel()

  return (
    <div className="profile">
      <img
        onClick={(e) => {
          fileInputRef.current && fileInputRef.current.click()
        }}
        className="profile__img"
        src={imageFile}
        alt="profile_img"
      />
      <input
        ref={fileInputRef}
        style={{ display: 'none' }}
        id="photo-upload"
        type="file"
        accept="image/*"
        onChange={handleFileInput}
      />
    </div>
  )
}

export default UserImage
