import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  const authorizationToken = false;
  const handleClick = (e) => {
    console.log("click");
  };

  // RETURN
  return (
    <div className='overlay'>
      <div className='home'>
        <Navbar authorizationToken={authorizationToken}></Navbar>
        <h1 className='double-vision-text'>swipe right &reg;</h1>
        <button className='primary-btn' onClick={handleClick}>
          {authorizationToken ? "signout" : "Create Account"}
        </button>
      </div>
    </div>
  );
};

export default Home;
