import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./ui/App";
import ApplyConfigGateway from "./core/gateways/ApplyConfigGateway";
import AppController from "./core/controllers/AppController";
import ApplyEffectsUseCase from "./core/use-cases/ApplyEffectsUseCase";
import * as serviceWorker from "./serviceWorker";
const applyConfig = window.require("electron").remote.require("./apply-config");

const sysGateway = ApplyConfigGateway(applyConfig);
const applyEffectsUseCase = ApplyEffectsUseCase(sysGateway);
const appController = AppController(applyEffectsUseCase);

ReactDOM.render(
  <React.StrictMode>
    <App onConfigSubmit={(config) => appController(config)} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
