import React, { Component } from "react";
import "./App.css";
import Name from "./components/Name";

class App extends Component {
  render() {
    return (
      <div className="box">
        <h1>Hello Dojo</h1>
        <h2>Things I need to do:</h2>
        <ul>
          <li>Learn React</li>
          <li>Climb Mt. Everest</li>
          <li>Run a Marathon</li>
          <li>Feed the Dogs</li>
        </ul>
        <Name firstName="Coding" lastName="Dojo" />
      </div>
    );
  }
}

export default App;
