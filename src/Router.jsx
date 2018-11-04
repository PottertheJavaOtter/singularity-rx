import React, { Component, Fragment } from "react";
import "./App.css";
import LoginPage from "./LoginPage/LoginPage";
import DashboardPage from "./DashboardPage/DashboardPage";

class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: props.page
    };
  }

  navigateTo = page => {
    this.setState({ page });
  };

  render() {
    const { page } = this.state;

    return (
      <Fragment>
        {page === "login" && <LoginPage navigateTo={this.navigateTo} />}
        {page === "dashboard" && <DashboardPage navigateTo={this.navigateTo} />}
      </Fragment>
    );
  }
}

export default Router;
