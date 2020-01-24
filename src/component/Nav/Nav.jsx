import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Nav.scss";
const Nav = () => {
  const [status, setStatus] = useState('close');
  return (
    <React.Fragment>
    <nav className={status} onClick={()=> status === 'close'? setStatus('open'): setStatus('close')}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS54-kZKQw7mZcRpGKi0Mlzo66I8lQWDgPSm0D4BVIEA-X5-rpW" alt="logo" />
      <h1>Jeevan subramani photography</h1>
      <ul>
        {/* <li><Link to="/photofolio/">About</Link></li>
        <li><Link to="/photofolio/photography">Photography</Link></li>
        <li><Link to="/photofolio/contact">Contact</Link></li>
        <li><Link to="/photofolio/shop">Shop</Link></li> */}
        <li><Link to="/">About</Link></li>
        <li><Link to="/photography">Photography</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/shop">Shop</Link></li>
      </ul>
      {/* <div className="arrow">
        <img src="arrow.png" alt="arrow" />
      </div> */}
    </nav>
    <div className="menu" onClick={()=> status === 'close'? setStatus('open'): setStatus('close')}>
      Menu
    </div>
    </React.Fragment>
  );
};

export default Nav;
