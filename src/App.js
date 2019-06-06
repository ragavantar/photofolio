import React from "react";

import "./App.css";

import Nav from "./component/Nav/Nav";
import About from "./component/About/About";
import Photography from "./component/Photography/Photography";
function App() {
  return (
    <React.Fragment>
      <Nav />
      <div className="content">
        <About />
        <Photography />
      </div>
    </React.Fragment>
  );
}

export default App;
