import React from "react";

import { Switch , Route } from 'react-router-dom';

import "./App.css";

import Nav from "./component/Nav/Nav";
import About from "./component/About/About";
import Photography from "./component/Photography/Photography";
function App() {
  return (
    <React.Fragment>
      <Nav />
      <div className="content">
      <Switch>
        <Route exact path="/" component = {About}/>
        <Route path="/photography" component = {Photography}/>
     
      </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
