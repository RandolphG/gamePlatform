import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { GameSettings, Information, Mood } from "./components";
import { getModalState, hideSettings } from "./store";
import { backdrop, modal } from "./motionSettings";
import { AnimatePresence, motion } from "framer-motion";

const SettingsViewModel = () => {
  const items = [
    {
      id: 1,
      title: "기분",
      setVisible: (event: any, id: any): void => {
        console.log(event);
        setVisibleTab(event);
      },
      component: Mood,
    },
    {
      id: 2,
      title: "게임",
      setVisible: (event: any, id: any): void => {
        console.log(event);
        setVisibleTab(event);
      },
      component: GameSettings,
    },
    {
      id: 3,
      title: "정보",
      setVisible: (event: any, id: any): void => {
        console.log(event);
        setVisibleTab(event);
      },
      component: Information,
    },
  ];

  const [visibleTab, setVisibleTab] = useState(items[0].id);

  const showModal: boolean = useSelector(getModalState);
  const dispatch: any = useDispatch();
  const location = useLocation();

  const hide = () => dispatch(hideSettings());

  return {
    items,
    visibleTab,
    showModal,
    hide,
    location,
    backdrop,
    modal,
    AnimatePresence,
    motion,
  };
};

export default SettingsViewModel;
