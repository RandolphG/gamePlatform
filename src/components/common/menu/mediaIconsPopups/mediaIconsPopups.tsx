import React from "react";
import { Link } from "react-router-dom";
import "./styles/_mediaIconsPopupStyles.scss";

const MediaIconsPopups = () => {
  return (
    <div className="mediaContainer">
      <div className="wrapper">
        <div className="icon facebook">
          <div className="tooltip">Home</div>
          <span>
            <i className="fab fa-facebook-f" />
          </span>
        </div>
        <Link to="/dashboard">
          <div className="icon twitter">
            <div className="tooltip">Game</div>

            <span>
              <i className="fab fa-twitter" />
            </span>
          </div>
        </Link>
        <div className="icon instagram">
          <div className="tooltip">Instagram</div>
          <span>
            <i className="fab fa-instagram" />
          </span>
        </div>
        <div className="icon github">
          <div className="tooltip">Github</div>
          <span>
            <i className="fab fa-github" />
          </span>
        </div>
        <div className="icon youtube">
          <div className="tooltip">Profile</div>
          <span>
            <i className="fab fa-youtube" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default MediaIconsPopups;
