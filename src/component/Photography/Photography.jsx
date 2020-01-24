import React, { Component } from "react";

import "./Photography.scss";
import { Link } from "react-router-dom";



class Photography extends Component {
  state = {};
  constructor() {
    super();
    this.state = {
      images: [],
      cat: 'Fashion'
    };
  }

  componentDidMount(){
    this.fetchData(this.state.cat);
  }
  fetchData = (cat)=>{

    cat = encodeURIComponent(cat);

    const url = `/api/getImages.php?cat=${cat}`;

    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            images: result.data
          });
        },
        (error) => {
          console.log(error);
          this.setState({
            images: []
          });
          // alert('failed to load data');
        }
      )
  }
  selectCat = (e)=>{
    let cat = e.target.innerHTML;
    cat = cat.split('&nbsp;').join(' ');
    this.fetchData(cat);
    this.setState({cat});
  }
  render() {
    return (
      <React.Fragment>
        <div className="category">
          <div onClick={(e)=>this.selectCat(e)}>Fashion</div>
          <div onClick={(e)=>this.selectCat(e)}>Portrait</div>
          <div onClick={(e)=>this.selectCat(e)}>Wedding&nbsp;Portfolio</div>
          <div onClick={(e)=>this.selectCat(e)}>Commercial&nbsp;Projects</div>
          <div onClick={(e)=>this.selectCat(e)}>Life&nbsp;Style</div>
          <div onClick={(e)=>this.selectCat(e)}>Couple&nbsp;Shoots</div>
          <div onClick={(e)=>this.selectCat(e)}>Travel&nbsp;and&nbsp;Landscape</div>
        </div>
        <h1>{this.state.cat}</h1>
        <div className="galleryL">
          {this.state.images.map(proj => (
            <figure>
              {/* <Link to={`/photofolio/Project/${proj.id}`}> */}
              <Link to={`/Project/${proj.id}`}>
              <img src={`/img/thumbs/${proj.img}`} alt={proj.name} key={proj.id} />
              <figcaption>{proj.name} +</figcaption>
              </Link>
            </figure>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Photography;
