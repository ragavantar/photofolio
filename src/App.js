import React from "react";

import "./App.css";

import Nav from "./component/Nav/Nav";
import About from "./component/About/About";
function App() {
  return (
    <React.Fragment>
      <Nav />
      <div className="content">
        <About />
      </div>
    </React.Fragment>
  );
}

export default App;
