import React from "react";
import { Link } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Grid,
  Button,
  Menu,
  MenuItem
} from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";
import { PRIMARY_BUTTON, PRIMARY_BOLD } from "assets/css/main";
import { loadImage, setItem, getItem } from "app/utils";
import i18next from "i18n";
import { withTranslation } from "react-i18next";

class PrimaryAppBar extends React.Component {
  classes = {};
  anchorEl = null;
  constructor(props) {
    super(props);
    this.state = {
      lang: getItem("lang") ? getItem("lang") : "id",
      openLang: false
    };
    this.clickLang = this.clickLang.bind(this);
  }
  clickLang = e => {
    this.anchorEl = e.currentTarget;
    this.setState({ openLang: true });
  };
  closeLang = l => {
    i18next.changeLanguage(l);
    setItem("lang", l);
    this.setState({ lang: l, openLang: false });
    this.anchorEl = null;
  };
  handleClose = () => {
    this.setState({ openLang: false });
    this.anchorEl = null;
  };

  render() {
    const { t } = this.props;
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
                      {t("general:link.home")}
                    </Link>
                    <Link
                      to=""
                      style={{
                        ...PRIMARY_BOLD,
                        marginLeft: 20,
                        marginRight: 20
                      }}>
                      {t("general:link.about")}
                    </Link>
                    <Link
                      to=""
                      style={{
                        ...PRIMARY_BOLD,
                        marginLeft: 20,
                        marginRight: 20
                      }}>
                      {t("general:link.contact")}
                    </Link>
                    <Link
                      to=""
                      style={{
                        marginLeft: 20,
                        marginRight: 50
                      }}>
                      <Button
                        onClick={() => {
                          setItem("lang", "id");
                          i18next.changeLanguage("en");
                        }}
                        size="small"
                        variant="contained"
                        style={{
                          ...PRIMARY_BUTTON,
                          fontWeight: "bold"
                        }}>
                        {t("general:link.login")}
                      </Button>
                    </Link>
                    <Button onClick={this.clickLang}>
                      {this.state.lang.toUpperCase()}
                      <ArrowDropDown style={{ marginLeft: 5 }} />
                    </Button>
                    <Menu
                      id="simple-menu"
                      anchorEl={this.anchorEl}
                      open={this.state.openLang}
                      onClose={this.handleClose}>
                      <MenuItem onClick={() => this.closeLang("id")}>
                        Bahasa (ID)
                      </MenuItem>
                      <MenuItem onClick={() => this.closeLang("en")}>
                        English (EN)
                      </MenuItem>
                    </Menu>
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
export default withTranslation()(PrimaryAppBar);
