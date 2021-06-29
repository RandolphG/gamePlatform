const ease = { ease: "easeInOut" };
const duration = 2.0;
const transition = {
  duration,
  ease,
};

export const profileMotionSettings = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 2 } },
  exit: { opacity: 0 },
};
