import React from "react";
import { Link } from "react-router-dom";

import { AppBar, Toolbar, Grid, Button } from "@material-ui/core";
import { PRIMARY_BUTTON, PRIMARY_BOLD } from "assets/css/main";
import { loadImage } from "app/utils";
import i18next from "i18next";

export default class PrimaryAppBar extends React.Component {
  classes = {};
  render() {
    return (
      <div>
        <AppBar
          position="absolute"
          color="default"
          style={{
            backgroundColor: "white",
            top: 0,
            bottom: "auto",
            position: "fixed",
            boxShadow: "none"
          }}>
          <Toolbar>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={2}>
              <Grid item lg={2} className={this.classes.title}>
                <Link to="/" className="centered">
                  <img
                    alt="Hiregrade-Logo"
                    src={loadImage("HiregradeLogo.png")}
                    //   style={{ marginRight: 50 }}
                    width={150}
                  />
                </Link>
              </Grid>
              <Grid item lg={10}>
                <Grid container justify="flex-end" alignItems="center">
                  <div className={this.classes.grow} />
                  <div
                    className={this.classes.sectionDesktop}
                    style={{ alignItems: "center" }}>
                    <Link
                      to=""
                      style={{
                        ...PRIMARY_BOLD,
                        marginLeft: 20,
                        marginRight: 20
                      }}>
                      {i18next.t("general:link.home", "Home")}
                    </Link>
                    <Link
                      to="/users/register"
                      style={{
                        ...PRIMARY_BOLD,
                        marginLeft: 20,
                        marginRight: 20
                      }}>
                      About Us
                    </Link>
                    <Link
                      to=""
                      style={{
                        ...PRIMARY_BOLD,
                        marginLeft: 20,
                        marginRight: 20
                      }}>
                      Contact
                    </Link>
                    <Link to="">
                      <Button
                        size="small"
                        variant="contained"
                        style={{
                          ...PRIMARY_BUTTON,
                          marginLeft: 20,
                          marginRight: 80
                        }}>
                        Daftar
                      </Button>
                    </Link>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
