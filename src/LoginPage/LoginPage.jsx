import React, { Component } from "react";
import { Input, Button } from "antd";
import logo from "../logo.png";
import "./LoginPage.css";

class LoginPage extends Component {
  state = {
    username: "",
    password: ""
  };

  login = () => {
    // const { username, password } = this.state;
    // if (username === "doctor" && password === "doctor") {
    //   this.props.navigateTo("dashboard");
    // }
    this.props.navigateTo("dashboard");
  };

  render() {
    return (
      <div className="LoginPage">
        <img src={logo} className="LoginPage__logo" alt="logo" />
        <h2>Login in</h2>
        <div style={{ marginBottom: 16 }}>
          <Input
            className="LoginPage__input"
            placeholder="username"
            onChange={e => this.setState({ username: e.target.value })}
          />
          <Input
            type="password"
            placeholder="password"
            onChange={e => this.setState({ password: e.target.value })}
          />
        </div>
        <div />
        <Button
          type="primary"
          className="LoginPage__login-button"
          onClick={this.login}
        >
          Login
        </Button>
      </div>
    );
  }
}

export default LoginPage;
