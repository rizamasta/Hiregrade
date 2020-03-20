import React from "react";
import Banner from "./Banner";
import Applicant from "./Applicant";
import Employer from "./Employer";
export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Banner />
        <Applicant />
        <Employer />
      </React.Fragment>
    );
  }
}
