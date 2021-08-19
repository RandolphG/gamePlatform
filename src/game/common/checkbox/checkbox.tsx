import React from "react";
import "./styles/_checkboxStyles.scss";

const Checkbox = () => (
  <span className="checkbox">
    <div className="roundedOne">
      <input type="checkbox" value="None" id="roundedOne" name="check" />
      <label htmlFor="roundedOne" />
    </div>
  </span>
);

export default Checkbox;
