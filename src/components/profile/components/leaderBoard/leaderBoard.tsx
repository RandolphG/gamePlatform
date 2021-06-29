import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { onAddNotification, UserImage } from "../../../common";
import { Coin } from "./components/coin";
import { leaderBoardMotionSettings } from "./motionSettings";
import { colors } from "./colors";
import { LeaderBoardViewModel } from "./leaderBoardViewModel";
import { leaderboardState } from "./store";
import "./styles/_leaderBoardStyle.scss";

/* TODO change background image of cards to game image instead of color */

const LeaderBoard = () => {
  const { variants, swipeConfidenceThreshold, swipePower } =
    LeaderBoardViewModel();
  const leader = useSelector(leaderboardState);
  const dispatch = useDispatch();
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, leader.games.length, page);
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const LeaderContent = ({ i, el }: any) => (
    <div className="leader-content">
      <div className="leader-name">{`${i + 1}.${el.name}`}</div>
      <div className="leader-score">
        <svg
          fill="currentColor"
          height="20"
          viewBox="0 0 493 493"
          version="1.1"
        >
          <path d="M247,468 C369.05493,468 468,369.05493 468,247 C468,124.94507 369.05493,26 247,26 C124.94507,26 26,124.94507 26,247 C26,369.05493 124.94507,468 247,468 Z M236.497159,231.653661 L333.872526,231.653661 L333.872526,358.913192 C318.090922,364.0618 303.232933,367.671368 289.298112,369.742004 C275.363292,371.81264 261.120888,372.847943 246.570473,372.847943 C209.522878,372.847943 181.233938,361.963276 161.702804,340.193617 C142.17167,318.423958 132.40625,287.169016 132.40625,246.427855 C132.40625,206.805956 143.738615,175.914769 166.403684,153.753368 C189.068753,131.591967 220.491582,120.511432 260.673112,120.511432 C285.856523,120.511432 310.144158,125.548039 333.536749,135.621403 L316.244227,177.257767 C298.336024,168.303665 279.700579,163.826682 260.337335,163.826682 C237.840155,163.826682 219.820296,171.381591 206.277218,186.491638 C192.734139,201.601684 185.962702,221.915997 185.962702,247.435186 C185.962702,274.073638 191.419025,294.415932 202.331837,308.462679 C213.244648,322.509425 229.109958,329.532693 249.928244,329.532693 C260.785092,329.532693 271.809664,328.413447 283.002291,326.174922 L283.002291,274.96891 L236.497159,274.96891 L236.497159,231.653661 Z" />
        </svg>
        <div className="leader-score_title">{el.score}</div>
      </div>
    </div>
  );

  const LeaderBar = ({ i, el }: any) => (
    <div
      style={{ animationDelay: `${0.4 + i * 0.2} s` }}
      className="leader-bar"
    >
      <div
        style={{
          backgroundColor: colors[i],
          width: `${(el.score / leader.maxScore) * 100}%`,
        }}
        className="bar"
      />
    </div>
  );

  const Blank = ({ children }: any) => <div className="blank">{children}</div>;

  const PlayerImage = (object: any) => {
    console.log(`el.id`, object.el.imgUrl);

    return (
      <span className="playerImage">
        <UserImage image={object.el.imgUrl} />
      </span>
    );
  };

  function onClick(el: any) {
    dispatch(onAddNotification({ title: el.name }));
  }

  return (
    <AnimatePresence initial={false} custom={direction}>
      <motion.div
        {...leaderBoardMotionSettings}
        className="leaderboard"
        key="leaderboard"
      >
        <h1 className="leaderboard_title">Leaderboard</h1>
        <motion.div
          className="leaderboard_leaders"
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          {leader ? (
            leader[leader.games[imageIndex]].list.map((el: any, i: any) => (
              <div
                key={el.id}
                style={{
                  animationDelay: `${i * 0.1}s`,
                }}
                className="leader"
              >
                <div className="leader-wrap" onClick={(e) => onClick(el)}>
                  {i < 3 ? (
                    <Blank>
                      <Coin />
                    </Blank>
                  ) : (
                    <Blank />
                  )}
                  <LeaderContent i={i} el={el} />
                  <div className="globalRank">#{el.rank}</div>
                  <PlayerImage el={el} />
                </div>
                <LeaderBar i={1} el={el} />
              </div>
            ))
          ) : (
            <div className="empty">No Leaders</div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LeaderBoard;
