import React, { useState } from "react";
import "./styles/_checkBoxStyles.scss";

const CheckBox = () => {
  const [language, setLanguage] = useState(false);

  const onChange = () => {
    setLanguage(!language);
  };

  let msg;
  if (language) {
    msg = "language is English";
  } else {
    msg = "language is Korean";
  }

  console.log(msg);

  return (
    <div className="slideThree">
      <input
        type="checkbox"
        onChange={onChange}
        value="None"
        id="slideThree"
        name="check"
      />
      <label htmlFor="slideThree" />
    </div>
  );
};

export default CheckBox;
