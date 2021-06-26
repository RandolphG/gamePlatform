import React, { Fragment, memo, useState } from "react";
import { motion } from "framer-motion";
import image from "./assets/_default_profile_img.png";
import { profile } from "./motionSettings";
import "./styles/_profileStyles.scss";

const Profile: React.FC = memo(() => {
  const [imageFile, s] = useState(image);

  const Title = () => (
    <Fragment>
      <h2 className="profileInfo_container_title">LeaderBoard</h2>
      <div className="profileInfo_container_subTitle">Top Challenger</div>
    </Fragment>
  );

  const PlayerImg = ({ imageFile }: any) => (
    <div className="profileInfo_container_imageContainer">
      <img
        className="profileInfo_container_imageContainer_image"
        src={imageFile}
        alt="profile_img"
      />
    </div>
  );

  const Rank = () => (
    <div className="profileInfo_container_rank">
      <div className="profileInfo_container_rank__number">#99</div>
      <div className="profileInfo_container_rank__text">Rank</div>
    </div>
  );

  const PlayerStatus = () => (
    <div className="profileInfo_container_playerStatus">
      <span className="profileInfo_container_playerStatus__text">
        online status
      </span>
      <span className="profileInfo_container_playerStatus__data">
        2 hours ago
      </span>
    </div>
  );

  const Xp = () => (
    <div className="profileInfo_container_xp">
      <div className="profileInfo_container_xp_bar">
        <span className="profileInfo_container_xp_bar_top">
          <span className="profileInfo_container_xp_bar_top__number">7</span>
        </span>
        <span className="profileInfo_container_xp_bar_bottom">
          <span className="profileInfo_container_xp_bar_bottom__number">8</span>
        </span>
      </div>
      <div className="profileInfo_container_xp_details">
        <div className="profileInfo_container_xp_details_currentXp">
          <span className="profileInfo_container_xp_details_currentXp__from">
            XP 768
          </span>
          <span className="profileInfo_container_xp_details_currentXp__to">
            /800
          </span>
        </div>
        <div className="profileInfo_container_xp_level-up">
          <span className="profileInfo_container_xp_levelUp__from">32 XP</span>
          <span className="profileInfo_container_xp_levelUp__to">
            to level Up
          </span>
        </div>
      </div>
    </div>
  );

  const PercentageStats = () => (
    <div className="profileInfo_container_percentageStats">
      <div className="profileInfo_container_percentageStats_allGames">
        <span className="profileInfo_container_percentageStats_allGames__label">
          ALL GAMES
        </span>
        <span className="profileInfo_container_percentageStats_allGames__number">
          398
        </span>
      </div>
      <div className="profileInfo_container_percentageStats_loseRate">
        <span className="profileInfo_container_percentageStats_loseRate__label">
          LOSE RATE
        </span>
        <span className="profileInfo_container_percentageStats_loseRate__number">
          4.4%
        </span>
      </div>
      <div className="profileInfo_container_percentageStats_winRate">
        <span className="profileInfo_container_percentageStats_winRate__label">
          WIN RATE
        </span>
        <span className="profileInfo_container_percentageStats_winRate__number">
          95.6%
        </span>
      </div>
    </div>
  );

  const GamePlayStats = () => (
    <div className="profileInfo_container_gamePlayStats">
      <div className="profileInfo_container_gamePlayStats_wins">
        <span className="profileInfo_container_gamePlayStats_wins__label">
          WINS
        </span>
        <span className="profileInfo_container_gamePlayStats_wins__number">
          #77
        </span>
      </div>
      <div className="profileInfo_container_gamePlayStats_ties">
        <span className="profileInfo_container_gamePlayStats_ties__label">
          TIES
        </span>
        <span className="profileInfo_container_gamePlayStats_ties__number">
          #21
        </span>
      </div>
      <div className="profileInfo_container_gamePlayStats_loses">
        <span className="profileInfo_container_gamePlayStats_loses__label">
          LOSES
        </span>
        <span className="profileInfo_container_gamePlayStats_loses__number">
          #77
        </span>
      </div>
    </div>
  );

  const Badges = () => {
    return (
      <div className="badges">
        <span className="badges__title">Badges (3)</span>
        <div className="badges__container">
          <div className="badges__container__game">Fast</div>
          <div className="badges__container__game">Kills</div>
          <div className="badges__container__game">Perfect</div>
          <div className="badges__container__game">Determined</div>
          <div className="badges__container__game">Leader</div>
        </div>
      </div>
    );
  };

  const Level = () => (
    <div className="profileInfo_container_playerLevel">
      <div className="profileInfo_container_playerLevel__info">Lvl #99</div>
    </div>
  );

  return (
    <motion.div
      {...profile}
      key="profile"
      className="profile"
      initial="initial"
      animate="visible"
      exit="exit"
    >
      <div className="leaderBoard">
        <div className="leaderBoard_container">leaderboard</div>
      </div>
      <div className="profileInfo">
        <div className="profileInfo_container">
          <Title />
          <PlayerImg imageFile={imageFile} />
          <Rank />
          <Level />
          <PlayerStatus />
          <Xp />
          <PercentageStats />
          <GamePlayStats />
        </div>
      </div>
    </motion.div>
  );
});

export default Profile;
