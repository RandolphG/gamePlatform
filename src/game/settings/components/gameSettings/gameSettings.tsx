import React from "react";
import { Trans } from "react-i18next";
import { Checkbox } from "../../../common";
import "./styles/_gameSettingsStyles.scss";

const Separator = ({ title }: any) => (
  <div className="separator">
    <Trans>{title}</Trans>
  </div>
);

const options = [
  {
    optionA: "settings.gameSettings.스킬연춝끄기",
    optionB: "settings.gameSettings.보상확독표시",
    optionC: "settings.gameSettings.윌드맴모험모드",
  },
  {
    optionA: "settings.gameSettings.전투종료후진도알림",
    optionB: "settings.gameSettings.이용가능콘텐츠표시",
    optionC: "settings.gameSettings.상태이상아이콘보기",
  },
  {
    optionA: "settings.gameSettings.치명타연출끄기",
    optionB: "settings.gameSettings.영웅/펫잠금모드",
    optionC: "settings.gameSettings.전투력증감파멉",
  },
  {
    optionA: "settings.gameSettings.치명타연출끄기",
    optionB: "",
    optionC: "settings.gameSettings.전투력증감파멉",
  },
];

const RowOne = ({ optionA, optionB, optionC, idx }: any) => (
  <div className="gameSettings_rowOne">
    <div className="gameSettings_rowOne_description">
      <Trans>{optionA}</Trans>
      <Checkbox />
    </div>
    <div className="gameSettings_rowOne_description">
      {idx === 5 ? (
        <div className="skills">
          <div>
            <Trans>settings.gameSettings.1개</Trans> <Checkbox />
          </div>
          <div>
            <Trans>settings.gameSettings.2개</Trans> <Checkbox />
          </div>
          <div>
            <Trans>settings.gameSettings.3개</Trans> <Checkbox />
          </div>
        </div>
      ) : (
        <Trans>{optionB}</Trans>
      )}
      <Checkbox />
    </div>
    <div className="gameSettings_rowOne_description">
      <Trans>{optionC}</Trans>
      <Checkbox />
    </div>
  </div>
);

const GameSettings = () => (
  <div className="gameSettings">
    <Separator title="settings.gameSettings.게임설정" />
    {options.map(({ optionA, optionB, optionC }, idx) => (
      <RowOne
        key={idx}
        idx={idx}
        optionA={optionA}
        optionB={optionB}
        optionC={optionC}
      />
    ))}
  </div>
);

export default GameSettings;
