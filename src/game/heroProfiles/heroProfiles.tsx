import React from "react";
import "./styles/_heroProfilesStyles.scss";
import hero from "../assets/_characters.png";

const HeroProfiles = () => {
  return (
    <div className="heroProfilesContainer">
      <div className="heroDetails">
        <div className="hero">
          <img className="heroImage" src={hero} alt="heroImage" />
          <div className="heroType">Warlock</div>
          <div className="heroLevel">
            <div className="heroLevel_button">level</div>
            <div className="heroLevel_image">Image</div>
            <div className="heroLevel_button">...</div>
            <div className="heroLevel_button">...</div>
            <div className="heroLevel_button">...</div>
          </div>
        </div>
        <div className="details">
          <div className="details_weaponAndSkills">
            <div className="details_weaponAndSkills__header">
              <div className="details_weaponAndSkills__header_title">
                K MoNEY DOG + 9
              </div>
              <div className="details_weaponAndSkills__header_stars">
                {[0, 1, 2, 3, 4].map(() => (
                  <div className="details_weaponAndSkills__header_stars_star">
                    ★
                  </div>
                ))}
              </div>
            </div>
            <div className="details_weaponAndSkills__level">LVL 46/46/</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroProfiles;
