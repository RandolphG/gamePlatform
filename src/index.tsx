import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import "./i18n";
import { store } from "./app";
import Routes from "./routes";
import "./theme/_style.scss";

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18next}>
      <Routes />
    </I18nextProvider>
  </Provider>,
  document.getElementById("root")
);
