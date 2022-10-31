import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import AuthorizationModal from "../components/AuthorizationModal";
import { Link } from "react-router-dom";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const authorizationToken = false; //nisi ulogovan nemas autorizaciju
  const handleClick = (e) => {
    setShowModal(true);
  };

  // RETURN
  return (
    <div className='overlay'>
      <Navbar
        authorizationToken={authorizationToken}
        setShowModal={setShowModal}
      ></Navbar>
      <section className='home-section center-flex-column height-400'>
        <h1 className='nottinder-inscription'>not tinder</h1>
        <button className='primary-btn create-acc-btn' onClick={handleClick}>
          {authorizationToken ? "Sign out" : "Create Account"}
        </button>
      </section>
      {showModal && (
        <AuthorizationModal setShowModal={setShowModal}></AuthorizationModal>
      )}
    </div>
  );
};

export default Home;
