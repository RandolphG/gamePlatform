const ease = { ease: "easeInOut" };
const duration = 2.0;
const transition = {
  duration,
  ease,
};

const profile = {
  initial: { x: 100, opacity: 0, transition },
  visible: { x: 0, opacity: 1, transition },
  exit: { opacity: 0, transition },
};

module.exports = {
  profile,
};
