import React from "react";
import Banner from "./Banner";
import Applicant from "./Applicant";
export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Banner />
        <Applicant />
      </React.Fragment>
    );
  }
}
