import React from "react";
import Button from "../components/Button";
import Text from "../components/Text";
import "../card.css";

export default function Card() {
  return (
    <>
      <div className="container">
        <div>
          <Button />
          <Text />
        </div>
      </div>
    </>
  );
}
