import React, { Component } from "react";

import "./Photography.scss";

import Data from "./data.js";

class Photography extends Component {
  state = {};
  constructor() {
    super();
    this.state = {
      images: Data.images,
      cat: 'Portrait'
    };
  }
  render() {
    return (
      <React.Fragment>
        <br />
        <br />
        <br />
        <div className="category">
          <div>Portrait</div>
          <div>Fashion</div>
          <div>Wedding&nbsp;Portfolio</div>
          <div>Commercial&nbsp;Projects</div>
          <div>Life&nbsp;Style</div>
          <div>Couple&nbsp;Shoots</div>
          <div>Travel&nbsp;and&nbsp;Landscape</div>
        </div>
        <h1>{this.state.cat}</h1>
        <div className="galleryL">
          {this.state.images.map(img => (
            <img src={img} alt="" key="img" />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Photography;
