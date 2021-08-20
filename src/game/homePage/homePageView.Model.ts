import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { setCoins } from "./store";

const HomePageViewModel = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [show, setShow] = useState(false);

  const 내정보MotionSettings = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 },
  };

  function onClose() {
    setShow(false);
  }

  useEffect(() => {
    // dispatch(setCoins({ coins: 3000 }));
  }, []);

  return {
    location,
    show,
    내정보MotionSettings,
    onClose,
  };
};

export default HomePageViewModel;
