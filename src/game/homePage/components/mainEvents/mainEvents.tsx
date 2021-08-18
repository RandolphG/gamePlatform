import React from "react";
import { Trans } from "react-i18next";
import 대전 from "../../assets/elements/대전.png";
import 모험 from "../../assets/elements/모험.png";
import 성장 from "../../assets/elements/성장.png";
import 전투 from "../../assets/elements/전투.png";

const MainEvents = () => (
  <div className="mainEvents">
    <div className="전투Container">
      <img className="전투" src={전투} alt="전투" />
      <div className="text">
        <Trans>main-events.전투</Trans>
      </div>
    </div>
    <div className="대전Container">
      <img className="대전" src={대전} alt="대전" />
      <div className="text">
        <Trans>main-events.대전</Trans>
      </div>
    </div>{" "}
    <div className="성장Container">
      <img className="성장" src={성장} alt="성장" />
      <div className="text">
        <Trans>main-events.성장</Trans>
      </div>
    </div>
    <div className="모험Container">
      <img className="모험" src={모험} alt="모험" />
      <div className="text">
        <Trans>main-events.모험</Trans>
      </div>
    </div>
  </div>
);

export default MainEvents;
