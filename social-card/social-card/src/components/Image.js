import React, { Component } from "react";

export default class Image extends Component {
  render() {
    return (
      <>
        <div>
          <image
            src="https://cdn.pixabay.com/photo/2014/11/30/14/11/kitty-551554__340.jpg"
            alt="cat"
            height="100px"
            width="100px"
          ></image>
        </div>
      </>
    );
  }
}
