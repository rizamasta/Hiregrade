import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { loadImage } from "app/utils";
import { PRIMARY_BUTTON } from "assets/css/main";

export default class Banner extends React.Component {
  render() {
    return (
      <Grid container>
        <img
          src={loadImage("banner1.png")}
          alt="Banner"
          width="100%"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            opacity: 0.8,
            resize: ""
          }}
        />
        <div style={{ position: "absolute", top: 180, left: "5%", width: 500 }}>
          <Typography
            variant="h3"
            style={{
              color: "white",
              fontWeight: "bold",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
            }}>
            Getting hired has just got lot smarter
          </Typography>
          <Button
            variant="contained"
            size="small"
            style={{ ...PRIMARY_BUTTON, fontWeight: "bold", marginTop: 20 }}>
            Sign Up Now
          </Button>
        </div>
      </Grid>
    );
  }
}
