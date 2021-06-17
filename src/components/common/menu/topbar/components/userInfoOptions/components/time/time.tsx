//@ts-nocheck
import React from "react";
import ErrorBoundary from "../../../../../../../../ErrorBoundary";
import { useTime } from "./timeViewModel";
import "./styles/_time.scss";

const Time = () => {
  const { date, day, time } = useTime();

  const Day = () => <div className="time_date_day">{day}</div>;
  const Date = () => <div className="time_date_number"> {date}</div>;
  const Time = () => <div className="time_localTime">{time}</div>;

  return (
    <ErrorBoundary>
      <div className="time" key="time">
        <div className="time_date">
          <Day />
          <Date />
        </div>
        <Time />
      </div>
    </ErrorBoundary>
  );
};

export default Time;
