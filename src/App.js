import React from "react";

import { Switch , Route } from 'react-router-dom';

import "./App.css";

import Nav from "./component/Nav/Nav";
import About from "./component/About/About";
import Photography from "./component/Photography/Photography";
import Contact from "./component/Contact/Contact";
import Shop from "./component/Shop/Shop";
import Project from "./component/Project/Project";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <div className="content">
      <Switch>
        <Route exact path="/photofolio/" component = {About}/>
        <Route path="/photofolio/photography" component = {Photography}/>
        <Route path="/photofolio/Contact" component = {Contact}/>
        <Route path = "/photofolio/Shop" component = {Shop} />
        <Route path = "/photofolio/Project" component = {Project} />
      </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
