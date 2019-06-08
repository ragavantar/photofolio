import React from "react";
import { Link } from "react-router-dom";

import "./Nav.scss";
const Nav = () => {
  return (
    <nav>
      <h1>title</h1>
      <ul>
        <li><Link to="/">About</Link></li>
        <li><Link to="/photography">Photography</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/shop">Shop</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
