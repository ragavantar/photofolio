import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Nav.scss";
const Nav = () => {
  const [status, setStatus] = useState('close');
  return (
    <nav className={status}  onClick={()=> status === 'close'? setStatus('open'): setStatus('close')}>
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
