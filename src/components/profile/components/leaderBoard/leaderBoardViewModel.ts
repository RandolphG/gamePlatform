export const LeaderBoardViewModel = () => {
  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 500 : -500,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 500 : -500,
        opacity: 0,
      };
    },
  };

  const swipeConfidenceThreshold = 10000;

  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return { swipePower, swipeConfidenceThreshold, variants };
};
