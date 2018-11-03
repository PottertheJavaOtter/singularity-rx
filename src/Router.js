import React, { Component, Fragment } from "react";
import "./App.css";
import LoginPage from "./LoginPage";

class Router extends Component {
  render() {
    const { page } = this.props;

    return <Fragment>{page === "login" && <LoginPage />}</Fragment>;
  }
}

export default Router;
