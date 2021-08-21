import React from "react";
import { Trans } from "react-i18next";
import { Button, Checkbox } from "../../../common";
import "./styles/_gameSettingsStyles.scss";
import { VolumeButton } from "../../../common/volumeButton";

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
    <Separator title="settings.gameSettings.sound-settings.사운드설정" />
    <div className="soundSettingsRowOne">
      <div>
        <Trans>settings.gameSettings.sound-settings.배경음</Trans>
      </div>
      <div>
        <VolumeButton />
      </div>
      <div className="muteControls">
        <div>
          <Trans>settings.gameSettings.sound-settings.음소거</Trans>
        </div>
        <Checkbox />
      </div>
      <div>
        <Trans>settings.gameSettings.sound-settings.효과음</Trans>
      </div>
      <div>
        <VolumeButton />
      </div>
      <div className="muteControls">
        <div>
          <Trans>settings.gameSettings.sound-settings.음소거</Trans>
        </div>
        <Checkbox />
      </div>
    </div>
    <div className="soundSettingsRowTwo">
      <div>
        <Trans>settings.gameSettings.sound-settings.배경음설정</Trans>
      </div>
      <div>SOUND_VOLUME</div>
      <div>
        <Trans>settings.gameSettings.sound-settings.시나리오보이스</Trans>
      </div>
      <div
        style={{
          width: "150px ",
          height: "50px",
          display: "flex",
          // position: "absolute",
          right: "1rem",
          bottom: "1rem",
        }}
      >
        <Button title="완료" />
      </div>
    </div>
  </div>
);

export default GameSettings;
