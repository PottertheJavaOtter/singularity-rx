import React, { Component } from "react";
import { Input } from "antd";

class LoginPage extends Component {
  render() {
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Input addonBefore="username" defaultValue="" />
          <Input addonBefore="password" defaultValue="" />
        </div>
      </div>
    );
  }
}

export default LoginPage;
