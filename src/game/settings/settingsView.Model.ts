import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getModalState, hideSettings } from "./store";
import { backdrop, modal } from "./motionSettings";
import { AnimatePresence, motion } from "framer-motion";

const SettingsViewModel = () => {
  const showModal: boolean = useSelector(getModalState);
  const dispatch: any = useDispatch();
  const location = useLocation();

  const hide = () => dispatch(hideSettings());

  return {
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
