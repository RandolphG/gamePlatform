import React, { FC } from "react";
import "./styles/_tooltip.scss";
import ErrorBoundary from "../../../ErrorBoundary";

interface ITooltip {
  label: string;
}

/**
 * Tooltip for universal use
 * @param children
 * @param label
 * @returns {JSX.Element}
 * @constructor
 */
const Tooltip: FC<ITooltip> = ({ children, label }): JSX.Element => {
  return (
    <ErrorBoundary>
      <div className="wrapper">
        <div className="icon object">
          <div className="tooltip">{label}</div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Tooltip;
