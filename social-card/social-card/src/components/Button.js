import React, { Component } from "react";
import "../button.css";

export class Button extends Component {
  render() {
    return (
      <>
        <section className="header-main">
          <div>
            <button
              className={`btn ${props.activeBtn === "en" ? "active" : ""}`}
              onClick={() => props.changeActive("en")}
            >
              En
            </button>
            <button
              className={`btn ${props.activeBtn === "fr" ? "active" : ""}`}
              onClick={() => props.changeActive("fr")}
            >
              Fr
            </button>
            {/* <button className="btn-main">Sp</button>
          <button className="btn-main">Gr</button> */}
          </div>
          <div>
            <button>X</button>
          </div>
        </section>
      </>
    );
  }
}

export default Button;
