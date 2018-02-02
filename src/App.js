import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      version: "",
      versions: []
    };
  }
  componentDidMount() {
    axios.get("/api/test").then(response => {
      console.log(response);
      this.setState({
        version: response.data[0][0].name,
        versions: JSON.stringify(response.data[0])
      });
    });
  }
  spoolSelects() {}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.version}</p>
        {this.state.versions}
        <select />
      </div>
    );
  }
}

export default App;
