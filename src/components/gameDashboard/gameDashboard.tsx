import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { CoinDrop } from "../common";
import { Profile } from "../profile";
import { Carousel } from "./carousel";
import { MainLinks } from "./mainLinks";
import { SingleImage } from "./SingleImage";
import GameDashboardUserAvatar from "./userAvatar";
import instagram from "./assets/instagram.svg";
import twitter from "./assets/twitter.svg";
import youtube from "./assets/youtube.svg";
import twitch from "./assets/twitch.svg";
import lastfm from "./assets/lastfm.svg";
import me from "./assets/_me.jpg";
import "./styles/_gameDashboardStyles.scss";

const GameDashboard = () => {
  const SocialLinks = () => (
    <div className="socialLinks">
      <img className="instagramSvg" src={instagram} alt="instagram" />
      <img className="twitterSvg" src={twitter} alt="twitter" />
      <img className="youtubeSvg" src={youtube} alt="youtube" />
      <img className="twitchSvg" src={twitch} alt="twitch" />
      <img className="lastfmSvg" src={lastfm} alt="lastfm" />
    </div>
  );

  const UserProfileOptions = () => (
    <div className="userProfileOptions">
      <GameDashboardUserAvatar imageFile={me} />
    </div>
  );

  return (
    <div className="gameDashboardLayout">
      <div className="gameLoungeNavbar">
        <MainLinks />
        <SocialLinks />
        <UserProfileOptions />
      </div>
      <div className="mainContent">
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter initial={false}>
              <Switch location={location} key={location.pathname}>
                {/*<Route exact path="/gameDashboard" component={Gallery} />*/}
                <Route path="/gameDashboard/profile" component={Profile} />
                <Route path="/gameDashboard/rewards" component={CoinDrop} />
                <Route
                  path="/gameDashboard/image/:id"
                  component={SingleImage}
                />
                <Route path="/gameDashboard/" component={Carousel} />
              </Switch>
            </AnimatePresence>
          )}
        />
      </div>
    </div>
  );
};

export default GameDashboard;
