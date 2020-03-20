import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { Main, EmptyLayout } from "../layouts";
import { routes, empty } from "../routes";
import { NotFound } from "app/pages";
import { isMobile } from "react-device-detect";
import { Grid, Typography, Hidden } from "@material-ui/core";
import { loadImage } from "app/utils";
// import {transl} from 'react-i18next';

const options = {
  position: "top center",
  timeout: 5000,
  offset: "30px",
  transition: "scale"
};
const Desktop = (
  <AlertProvider template={AlertTemplate} {...options}>
    <BrowserRouter>
      <Switch>
        {empty.map((value, i) => {
          return (
            <Route
              key={i + "e"}
              exec
              path={value.path}
              component={EmptyLayout}
            />
          );
        })}
        {routes.map((value, i) => {
          return <Route key={i} exec path={value.path} component={Main} />;
        })}
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </AlertProvider>
);
const Mobile = (
  <Grid
    direction="column"
    container
    justify="center"
    alignItems="center"
    style={{ height: "100vh" }}>
    <img src={loadImage("HiregradeLogo.png")} alt="Logo" width={150} />
    <Typography>Mobile version comming soon..</Typography>
  </Grid>
);
class App extends React.Component {
  render() {
    if (isMobile) {
      return <div>{Mobile}</div>;
    } else {
      return (
        <div>
          <Hidden smDown>{Desktop}</Hidden>
          <Hidden mdUp>{Mobile}</Hidden>
        </div>
      );
    }
  }
}

export default App;
