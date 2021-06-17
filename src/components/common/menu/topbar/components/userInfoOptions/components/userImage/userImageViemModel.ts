import { useRef, useState } from "react";
import image from "./assets/_default_profile_img.png";

export const UserImageViewModel = () => {
  const [imageFile, setImageFile] = useState(image);
  const fileInputRef: any = useRef(null);

  function photoUpload(e: Blob) {
    const file = e;
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = (theFile) => {
      const data: any = {
        blob: theFile?.target?.result,
        // name: file.name,
      };

      setImageFile(data.blob);
    };

    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }

  function handleFileInput(e: {
    preventDefault: () => void;
    target: { files: Blob[] };
  }) {
    e.preventDefault();
    photoUpload(e.target.files[0]);
  }

  return {
    imageFile,
    fileInputRef,
    handleFileInput,
  };
};
