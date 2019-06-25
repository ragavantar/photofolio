import React, { Component } from 'react';

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
    
    fetch("https://vikashvvn2.000webhostapp.com/portfolio/api/getProject.php")
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
          <img src="https://vikashvvn2.000webhostapp.com/portfolio/img/IMG_5d11d2647dd18.png" />
        </div>
      );
    }
  }
}
 
export default Project;