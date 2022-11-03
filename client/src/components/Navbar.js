import React from "react";
import logo from "../images/logo_white.png";

const Navbar = ({ setShowModal, setIsSignUp }) => {
  const handleClick = (e) => {
    setIsSignUp(false);
    setShowModal(true);
  };
  console.log();
  return (
    <nav className='center-flex-row'>
      <div className='logo-container'>
        <img src={logo} alt='logo.png' className='logo' />
      </div>
      <button className='primary-btn nav-btn' onClick={handleClick}>
        Log in
      </button>
    </nav>
  );
};

export default Navbar;
