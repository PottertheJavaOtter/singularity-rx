import React, { Component } from "react";
import Router from "./Router";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router page="dashboard" />
      </div>
    );
  }
}

export default App;
