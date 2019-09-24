import React, { Component } from "react";
import Button from "../components/Button";

export class Header extends Component {
  render() {
    return (
      <>
        <div>
          <Button
            activeBtn={this.state.active}
            changeActive={this.changeActive}
          />
        </div>
      </>
    );
  }
}

export default Header;
