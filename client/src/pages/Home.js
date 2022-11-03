import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import AuthorizationModal from "../components/AuthorizationModal";

const Home = ({ cookies, setCookie, removeCookie }) => {
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const authorizationToken = false; //nisi ulogovan nemas autorizaciju
  const handleClick = (e) => {
    setIsSignUp(true);
    setShowModal(true);
  };

  // RETURN
  return (
    <div className='overlay'>
      <Navbar
        authorizationToken={authorizationToken}
        setShowModal={setShowModal}
        setIsSignUp={setIsSignUp}
      ></Navbar>
      <section className='home-section center-flex-column height-400'>
        <h1 className='nottinder-inscription'>not tinder</h1>
        <button className='primary-btn create-acc-btn' onClick={handleClick}>
          {authorizationToken ? "Sign out" : "Create Account"}
        </button>
      </section>
      {showModal && (
        <AuthorizationModal
          setShowModal={setShowModal}
          isSignUp={isSignUp}
          cookies={cookies}
          setCookie={setCookie}
          removeCookie={removeCookie}
        ></AuthorizationModal>
      )}
    </div>
  );
};

export default Home;
