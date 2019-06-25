import React, { Component } from 'react';

import "./Project.scss";

class Project extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: {}
    };
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    fetch(`https://vikashvvn2.000webhostapp.com/portfolio/api/getProject.php?id=${params.id}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


  render() {
    const { error, isLoaded, data } = this.state;
    const { name, desc, imgs } = data;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h2>{name}</h2>
          <p>{desc}</p>
          <h3>Slides</h3>
          <div className="gallerySwipe">
            {
              imgs.map(
                img => 
                <img src={`https://vikashvvn2.000webhostapp.com/portfolio/img/thumbs/${img}`} alt={`${name} image`} key={img}/>)
            }
          </div>
          <h3>Images</h3>
          <div className="galleryAll">
            {
              imgs.map(
                img => 
                <img src={`https://vikashvvn2.000webhostapp.com/portfolio/img/${img}`} alt={`${name} image`} key={img}/>)
            }
          </div>

        </div>
      );
    }
  }
}
 
export default Project;