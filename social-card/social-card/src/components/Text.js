import React from "react";
import "../text.css";

export default function Text() {
  return (
    <>
      <section>
        <h1 className="heading">
          Hello
          <br />
          World.
        </h1>
      </section>
      <section>
        <p className="para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </section>
    </>
  );
}
