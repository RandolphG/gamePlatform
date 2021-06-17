import React from "react";
import ReactDOM from "react-dom";
import { store } from "./app";
import { Provider } from "react-redux";
import Routes from "./routes";
import "./theme/_style.scss";

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
