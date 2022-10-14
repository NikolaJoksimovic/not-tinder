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
        <FiX onClick={handleClick} className='fiX-icon'></FiX>
        <header>
          <div className='create-acc-inscription'>
            <h3>{isSignUp ? "CREATE ACCOUNT" : "LOG IN"}</h3>
          </div>
          <p>
            By clicking Log in, you agree to our terms. Learn how we process
            your data in our Privacy plicy and Cookie Policy.
          </p>
        </header>
        <form action='' onSubmit={handleSubmit} className='modal-form'>
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
          <button type='submit' className='modal-submit-btn'>
            {isSignUp ? "CREATE ACCOUNT" : "LOG IN"}
          </button>
          <p>{error}error</p>
        </form>
        <footer>
          <hr />
          <h3>GET THE APP</h3>
        </footer>
      </div>
    </div>
  );
};

export default AuthorizationModal;
