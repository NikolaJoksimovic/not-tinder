import React from "react";
import logo from "../images/logo_white.png";

const Navbar = ({ authorizationToken, setShowModal }) => {
  const handleClick = (e) => {
    setShowModal(true);
  };
  return (
    <nav className='center-flex-row'>
      <div className='logo-container'>
        <img src={logo} alt='logo.png' className='logo' />
      </div>
      {!authorizationToken && (
        <button className='primary-btn nav-btn' onClick={handleClick}>
          Log in
        </button>
      )}
    </nav>
  );
};

export default Navbar;
