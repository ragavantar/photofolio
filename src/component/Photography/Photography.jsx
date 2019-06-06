import React, { Component } from "react";

import "./Photography.scss";

import Data from "./data.js";

class Photography extends Component {
  state = {};
  constructor() {
    super();
    this.state = {
      images: Data.images
    };
  }
  render() {
    return (
      <React.Fragment>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="category">
          <div>Portait</div>
          <div>Fashion</div>
          <div>Concept&nbsp;Shoots</div>
          <div>Couple&nbsp;Shoots</div>
          <div>Life&nbsp;Style</div>
          <div>Wedding&nbsp;Portfolio</div>
          <div>Maternity&nbsp;Shoot</div>
          <div>Travel&nbsp;and&nbsp;Landscape</div>
          <div>Corporate&nbsp;Events</div>
          <div>Events</div>
          <div>Family&nbsp;Shoot</div>
        </div>
        <h1>Cat 1</h1>
        <div className="gallery">
          {this.state.images.map(img => (
            <img src={img} alt="" key="img" />
          ))}
        </div>
        <h1>Cat 2</h1>
        <div className="gallery">
          {this.state.images.map(img => (
            <img src={img} alt="" key="img" />
          ))}
        </div>
        <h1> list view</h1>
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
