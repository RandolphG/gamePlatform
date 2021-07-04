const ease = { ease: "easeInOut" };
const duration = 2.0;
const transition = {
  duration,
  ease,
};

export const leaderBoardMotionSettings = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
  exit: { x: -50, opacity: 0, transition: { duration: 1 } },
};
