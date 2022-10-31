import React from "react";
import { FiX } from "react-icons/fi";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const AuthorizationModal = ({ setShowModal }) => {
  const isSignUp = true;
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  // CLOSE BTN
  const handleClick = (e) => {
    setShowModal(false);
  };
  // INPUT CHANGE
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // SUBMIT(CREATE ACCOUTN) BTN
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isSignUp && user.password !== user.confirmPassword) {
        setError("Passwords need to match!");
        return;
      }

      // axios post i prosledjujem usera..
      const response = await axios.post(
        `http://localhost:8000/${isSignUp ? "signup" : "login"}`,
        {
          email: user.email,
          password: user.password,
        }
      );
      if (response.status === 201) {
        setCookie("Email", response.data.user.email);
        setCookie("UserId", response.data.user.user_id);
        setCookie("AuthToken", response.data.token);
        if (isSignUp) {
          navigate("/onboarding");
        } else {
          navigate("/dashboard");
        }
      } else {
        console.log("Something went wrong with the sign up ...");
      }
    } catch (error) {
      console.log(error);
    }
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
              value={user.email}
            />
            <input
              type='password'
              id='password'
              name='password'
              placeholder='password'
              required={true}
              onChange={handleChange}
              value={user.password}
            />
            {isSignUp ? (
              <input
                type='password'
                id='confirmPassword'
                name='confirmPassword'
                placeholder='confirmPassword'
                required={true}
                onChange={handleChange}
                value={user.confirmPassword}
              />
            ) : (
              <></>
            )}
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