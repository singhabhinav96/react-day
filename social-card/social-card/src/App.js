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
  changeActive = value => {
    this.setState({ active: value });
  };

  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <Card
              activeBtn={this.state.active}
              changeActive={this.changeActive}
            />
          </header>
        </div>
      </>
    );
  }
}

export default App;
