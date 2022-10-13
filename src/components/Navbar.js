import React from "react";
import logo from "../images/logo_white.png";

const Navbar = ({ authorizationToken }) => {
  return (
    <nav>
      <div className='logo-container'>
        <img src={logo} alt='logo.png' className='logo' />
      </div>
      {!authorizationToken && <button className='nav-btn'>Log in</button>}
    </nav>
  );
};

export default Navbar;
