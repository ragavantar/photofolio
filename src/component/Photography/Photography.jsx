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

  selectCat = (e)=>{
    let cat = e.target.innerHTML;
    cat = cat.split('&nbsp;').join(' ');

     this.setState({cat});
  }
  render() {
    return (
      <React.Fragment>
        <br />
        <br />
        <br />
        <div className="category">
          <div onClick={(e)=>this.selectCat(e)}>Portrait</div>
          <div onClick={(e)=>this.selectCat(e)}>Fashion</div>
          <div onClick={(e)=>this.selectCat(e)}>Wedding&nbsp;Portfolio</div>
          <div onClick={(e)=>this.selectCat(e)}>Commercial&nbsp;Projects</div>
          <div onClick={(e)=>this.selectCat(e)}>Life&nbsp;Style</div>
          <div onClick={(e)=>this.selectCat(e)}>Couple&nbsp;Shoots</div>
          <div onClick={(e)=>this.selectCat(e)}>Travel&nbsp;and&nbsp;Landscape</div>
        </div>
        <h1>{this.state.cat}</h1>
        <div className="galleryL">
          {this.state.images.map(img => (
            <img src={img} alt="" key={img} />
          ))}
        </div>
        <h1>Swipe full horizon</h1>
        <div className="galleryH">
          {this.state.images.map(img => (
            <img src={img} alt="" key="img" />
          ))}
          {this.state.images.map(img => (
            <img src={img} alt="" key="img" />
          ))}
          {this.state.images.map(img => (
            <img src={img} alt="" key="img" />
          ))}
          {this.state.images.map(img => (
            <img src={img} alt="" key="img" />
          ))}
          {this.state.images.map(img => (
            <img src={img} alt="" key="img" />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Photography;
