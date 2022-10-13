import React from "react";
import { FiX } from "react-icons/fi";
import { useState } from "react";

const AuthorizationModal = ({ setShowModal }) => {
  const isSignUp = true;
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [input, setInput] = useState(null);
  const [error, setError] = useState(null);
  const handleClick = (e) => {
    setShowModal(false);
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className='authorization-modal-overlay'>
      <div className='authorization-modal'>
        <header>
          <FiX onClick={handleClick} className='fiX-icon'></FiX>
          <h3>{isSignUp ? "CREATE ACCOUNT" : "LOG IN"}</h3>
          <p>
            By clicking Log in, you agree to our terms. Learn how we proess your
            data in our Privacy plicy.
          </p>
          <form action='' onSubmit={handleSubmit}>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='email'
              required={true}
              onChange={handleChange}
            />
            <input
              type='password'
              id='password'
              name='password'
              placeholder='password'
              required={true}
              onChange={handleChange}
            />
            <input
              type='confirmPassword'
              id='confirmPassword'
              name='confirmPassword'
              placeholder='confirmPassword'
              required={true}
              onChange={handleChange}
            />
            <button type='submit' className='modal-submit-btn'>
              {isSignUp ? "CREATE ACCOUNT" : "LOG IN"}
            </button>
            <p>{error}</p>
          </form>
          <hr />
          <h3>GET THE APP</h3>
        </header>
      </div>
    </div>
  );
};

export default AuthorizationModal;
