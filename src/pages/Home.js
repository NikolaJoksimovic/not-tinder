import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import AuthorizationModal from "../components/AuthorizationModal";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const authorizationToken = false;
  const handleClick = (e) => {
    setShowModal(true);
  };

  // RETURN
  return (
    <div className='overlay'>
      <section className='home-section'>
        <Navbar
          authorizationToken={authorizationToken}
          setShowModal={setShowModal}
        ></Navbar>
        <h1 className='nottinder-inscription'>not tinder</h1>
        <button className='primary-btn' onClick={handleClick}>
          {authorizationToken ? "signout" : "Create Account"}
        </button>
        {showModal && (
          <AuthorizationModal setShowModal={setShowModal}></AuthorizationModal>
        )}
      </section>
    </div>
  );
};

export default Home;
