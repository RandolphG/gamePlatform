import React from "react";
import instagram from "./assets/instagram.svg";
import lastfm from "./assets/lastfm.svg";
import twitch from "./assets/twitch.svg";
import twitter from "./assets/twitter.svg";
import youtube from "./assets/youtube.svg";

const SocialLinks = () => (
  <div className="socialLinks">
    <img className="instagramSvg" src={instagram} alt="instagram" />
    <img className="twitterSvg" src={twitter} alt="twitter" />
    <img className="youtubeSvg" src={youtube} alt="youtube" />
    <img className="twitchSvg" src={twitch} alt="twitch" />
    <img className="lastfmSvg" src={lastfm} alt="lastfm" />
  </div>
);

export default SocialLinks;
