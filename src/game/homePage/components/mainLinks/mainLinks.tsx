import React from "react";
import { Trans } from "react-i18next";
import 길드 from "../../assets/elements/길드.png";
import 버프상점 from "../../assets/elements/버프상점.png";
import 상점 from "../../assets/elements/상점.png";
import 소셜 from "../../assets/elements/소셜.png";
import 소환상점 from "../../assets/elements/소환상점.png";
import 엽젹 from "../../assets/elements/엽젹.png";
import 영웅 from "../../assets/elements/영웅.png";
import 콘텐츠 from "../../assets/elements/콘텐츠.png";

const MainLinks = () => (
  <div className="mainLinks">
    <div className="영웅Container">
      <img className="영웅" src={영웅} alt="영웅" />
      <div className="text">
        <Trans>main-links.영웅</Trans>
      </div>
    </div>
    <div className="업적Container">
      <img className="업적" src={엽젹} alt="업적" />
      <div className="text">
        <Trans>main-links.업적</Trans>
      </div>
    </div>
    <div className="소셜Container">
      <img className="소셜" src={소셜} alt="소셜" />
      <div className="text">
        <Trans>main-links.소셜</Trans>
      </div>
    </div>
    <div className="길드Container">
      <img className="길드" src={길드} alt="길드" />
      <div className="text">
        <Trans>main-links.길드</Trans>
      </div>
    </div>
    <div className="콘텐츠Container">
      <img className="콘텐츠" src={콘텐츠} alt="콘텐츠" />
      <div className="text">
        <Trans>main-links.콘텐츠</Trans>
      </div>
    </div>
    <div className="소환상점Container">
      <img className="소환상점" src={소환상점} alt="소환상점" />
      <div className="text">
        <Trans>main-links.소환상점</Trans>
      </div>
    </div>
    <div className="상점Container">
      <img className="상점" src={상점} alt="상점" />
      <div className="text">
        <Trans>main-links.상점</Trans>
      </div>
    </div>
    <div className="버프상점Container">
      <img className="버프상점" src={버프상점} alt="버프상점" />
      <div className="text">
        <Trans>main-links.버프상점</Trans>
      </div>
    </div>
  </div>
);

export default MainLinks;
