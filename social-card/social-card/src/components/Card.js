import React from "react";
import Header from "../components/Header";
import Text from "../components/Text";
import Image from "../components/Image";
import "../card.css";

export default function Card() {
  return (
    <>
      <div className="container">
        <div>
          <Header />
        </div>
        <div className="middle-section">
          <Text />
          <Image />
        </div>
      </div>
    </>
  );
}
