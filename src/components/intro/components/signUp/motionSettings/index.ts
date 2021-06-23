/* motion settings for loginLayout elements */

const transition = { duration: 0.75 };

export const signupLayout = {
  initial: { x: -50, opacity: 0 },
  animate: { x: 0, opacity: 1, transition },
  exit: { opacity: 0, transition },
};

export const input = {
  initial: { x: 50, opacity: 0 },
  animate: { x: 0, opacity: 1, transition },
  exit: { x: -30, opacity: 0, transition },
};
