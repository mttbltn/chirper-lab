import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Chirps from "./components/Chirps";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Chirps />
      </div>
    );
  }
}

export default App;
