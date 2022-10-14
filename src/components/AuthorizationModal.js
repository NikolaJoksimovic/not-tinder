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
    <div className='authorization-modal-overlay center-flex-column'>
      <div className='authorization-modal center-flex-column'>
        <FiX onClick={handleClick} className='fiX-icon'></FiX>
        <header>
          <div className='create-acc-inscription center-flex-column'>
            <h3>{isSignUp ? "CREATE ACCOUNT" : "LOG IN"}</h3>
            <p>
              By clicking Log in, you agree to our terms. Learn how we process
              your data in our Privacy plicy and Cookie Policy.
            </p>
          </div>
        </header>
        <form
          action=''
          onSubmit={handleSubmit}
          className='modal-form center-flex-column'
        >
          <div className='form-inputs center-flex-column'>
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
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              placeholder='confirmPassword'
              required={true}
              onChange={handleChange}
            />
          </div>
          <button type='submit' className='primary-btn modal-submit-btn'>
            {isSignUp ? "CREATE ACCOUNT" : "LOG IN"}
          </button>
        </form>
        <footer>
          <p className='modal-error-msg'>{error}error</p>
          <hr />
          <h3>GET THE APP</h3>
        </footer>
      </div>
    </div>
  );
};

export default AuthorizationModal;
