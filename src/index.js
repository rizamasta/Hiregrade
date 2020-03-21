import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/main/App";
import * as serviceWorker from "./serviceWorker";
import "./assets/css/font.css";
import i18n from "i18n";
import { I18nextProvider } from "react-i18next";
import { Grid } from "@material-ui/core";
import { loadImage } from "app/utils";
const Loader = () => (
  <Grid
    direction="column"
    container
    justify="center"
    alignItems="center"
    style={{ height: "100vh" }}>
    <img src={loadImage("logo.png")} alt="Logo" width={100} />
  </Grid>
);
ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </I18nextProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
