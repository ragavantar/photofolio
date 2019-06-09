import React from "react";
import { Link } from "react-router-dom";

import "./Nav.scss";
const Nav = () => {
  return (
    <nav>
      <h1>title</h1>
      <ul>
        <li><Link to="/photofolio/">About</Link></li>
        <li><Link to="/photofolio/photography">Photography</Link></li>
        <li><Link to="/photofolio/contact">Contact</Link></li>
        <li><Link to="/photofolio/shop">Shop</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
