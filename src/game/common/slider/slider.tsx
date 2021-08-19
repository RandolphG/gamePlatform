import React, { useState } from "react";
import i18n from "i18next";
import "./styles/_checkBoxStyles.scss";

const Slider: React.FC = () => {
  const [language, setLanguage] = useState(false);
  const [lang, setLang] = useState("en");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLanguage(!language);

    if (language) {
      setLang("en");
    } else {
      setLang("ko");
    }

    i18n
      .changeLanguage(lang)
      .then((r) => console.log(`language changed -->`, lang));
  };

  return (
    <div className="slideThree">
      <input
        type="checkbox"
        onChange={onChange}
        value={lang}
        id="slideThree"
        name="check"
      />
      <label htmlFor="slideThree" />
    </div>
  );
};

export default Slider;
