import React from "react";
import Header from "../components/Header";
import Text from "../components/Text";
import Image from "../components/Image";
import Social from "../components/Social";
import "../card.css";

export default function Card() {
  return (
    <>
      <div className="container">
        <div className="header">
          <Header
            activeBtn={this.state.active}
            changeActive={this.changeActive}
          />
        </div>
        <div className="flex-container">
          <div>
            <Text />
          </div>
          <div>
            <Image />
          </div>
        </div>
        <div className="social-section">
          <Social />
        </div>
        <div className="footer"></div>
      </div>
    </>
  );
}
