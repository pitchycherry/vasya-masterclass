import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { NavBar } from "./containers";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;
