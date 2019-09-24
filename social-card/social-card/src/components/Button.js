import React from "react";
import "../button.css";

export default function Button() {
  return (
    <>
      <section className="header-main">
        <div>
          <button className="btn-main">En</button>
          <button className="btn-main">Fr</button>
        </div>
        <div>
          <button>X</button>
        </div>
      </section>
    </>
  );
}
