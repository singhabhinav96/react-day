import React, { Component } from "react";
import "./App.css";
import Card from "../src/components/Card";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      active: "en"
    };
  }
  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <Card />
          </header>
        </div>
      </>
    );
  }
}

export default App;
