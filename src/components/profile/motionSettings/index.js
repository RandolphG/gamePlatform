const ease = { ease: "easeInOut" };
const duration = 2.0;
const transition = {
  duration,
  ease,
};

const loginMotionSettings = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition,
  },
  exit: { opacity: 0, transition },
};

const signUpMotionSettings = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition,
  },
  exit: { opacity: 0, transition },
};

const slideOut = {
  initial: {
    x: 10,
    opacity: 0,
    transition,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition,
  },
  exit: {
    x: 10,
    opacity: 0,
    transition,
  },
};

const profile = {
  initial: { opacity: 0, transition: { duration: 0.5 } },
  visible: { opacity: 1, transition: { delay: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

const modal = {
  initial: { x: "-100px", opacity: 0, transition: { delay: 0.4 } },
  visible: {
    x: "0",
    opacity: 1,
    transition: { delay: 0.5 },
  },
  exit: { x: "100px", opacity: 0, transition: { delay: 0.4 } },
};

const scaleUp = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition,
  },
  exit: { opacity: 0, scale: 0.7, transition },
};

const fadeInUp = {
  initial: {
    y: 10,
    opacity: 0,
    transition,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition,
  },
  exit: {
    y: 10,
    opacity: 0,
    transition,
  },
};

module.exports = {
  fadeInUp,
  slideOut,
  scaleUp,
  signUpMotionSettings,
  loginMotionSettings,
  modal,
  profile,
};
