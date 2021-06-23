export const useTimeElapsed = () => {
  let startTime: any;
  let endTime: any;
  let seconds;

  function start() {
    startTime = new Date();
  }

  function end() {
    endTime = new Date();
    let timeDiff: any = endTime - startTime;
    timeDiff /= 1000;

    seconds = Math.round(timeDiff);
  }

  const showElapsedTime = (timestamp: any) => {
    if (typeof timestamp !== "number") return "NaN";

    const SECOND = 1000;
    const MINUTE = 1000 * 60;
    const HOUR = 1000 * 60 * 60;
    const DAY = 1000 * 60 * 60 * 24;
    const MONTH = 1000 * 60 * 60 * 24 * 30;
    const YEAR = 1000 * 60 * 60 * 24 * 30 * 12;

    // const elapsed = ((new Date()).valueOf() - timestamp)
    const elapsed = 1541309742360 - timestamp;

    if (elapsed <= MINUTE) return `${Math.round(elapsed / SECOND)}s`;
    if (elapsed <= HOUR) return `${Math.round(elapsed / MINUTE)}m`;
    if (elapsed <= DAY) return `${Math.round(elapsed / HOUR)}h`;
    if (elapsed <= MONTH) return `${Math.round(elapsed / DAY)}d`;
    if (elapsed <= YEAR) return `${Math.round(elapsed / MONTH)}mo`;
    return `${Math.round(elapsed / YEAR)}y`;
  };

  const createdAt = 1541301301000;

  console.log(showElapsedTime(createdAt + 5000000));
  console.log(showElapsedTime(createdAt));
  console.log(showElapsedTime(createdAt - 500000000));

  return {
    start,
    end,
    startTime,
    endTime,
    seconds,
  };
};
