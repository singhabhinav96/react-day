import React from "react";
import Button from "../components/Button";

export default function Header() {
  return (
    <div>
      <Button activeBtn={this.state.active} changeActive={this.changeActive} />
    </div>
  );
}
