import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { useCookies } from "react-cookie";
import axios from "axios";
const { useNavigate } = require("react-router-dom");

const OnBoarding = () => {
  const [checkBoxes, setCheckBoxes] = useState({
    my: false, // [m]an_gender-identit[y]
    wy: false,
    mt: false, // [m]an_gender-interes[t]
    wt: false,
  });

  const [cookies, setCookie, removeCookie] = useCookies(["user"]); //user je samo ime cookija

  const [formData, setFormData] = useState({
    first_name: "",
    user_id: cookies.userId,
    email: cookies.email,
    dob_day: "",
    dob_month: "",
    dob_year: "",
    show_gender: "false",
    gender_identity: "",
    gender_interest: "",
    url: "",
    about: "",
    matches: [],
  });

  const authorizationToken = true;
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    console.log(formData);
    e.preventDefault();
    const response = await axios.put("/user", {
      formData,
    });
    const success = response.status === 201;
    if (success) {
      navigate("/dashboard");
    }
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.type === "raido" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [name]: value });
  };
  const handleRadioClick = (e) => {
    const id = e.target.id;
    // const firstLetter = id.substring(0, 1);
    const secondLetter = id.substring(id.length - 1, id.length);
    const name = id.substring(0, 1) + id.substring(id.length - 1, id.length);
    let newCheckBoxes =
      secondLetter === "y"
        ? { ...checkBoxes, ["my"]: false, ["wy"]: false }
        : { ...checkBoxes, ["mt"]: false, ["wt"]: false };
    setCheckBoxes({ ...newCheckBoxes, [name]: true });
  };
  return (
    <>
      <Navbar setShowModal={() => {}} showModal={false}></Navbar>
      <div className='onboarding center-flex-column height-800'>
        <h2>create account</h2>
        <form action='' onSubmit={handleSubmit}>
          <div className='screen-md'>
            <div className='screen-md-left'>
              <section>
                <label htmlFor='first_name'>FirstName</label>
                <input
                  className='first-name-input'
                  id='first_name'
                  type='text'
                  name='first_name'
                  placeholder='First Name'
                  required={true}
                  value={formData.first_name}
                  onChange={handleChange}
                />
              </section>{" "}
              <section>
                <label>Birthday</label>
                <div className='dob_inputs center-flex-row'>
                  <input
                    className='dob-input'
                    id='dob_day'
                    type='number'
                    name='dob_day'
                    placeholder='DD'
                    required={true}
                    value={formData.dob_day}
                    onChange={handleChange}
                  />
                  <input
                    className='dob-input'
                    id='dob_month'
                    type='number'
                    name='dob_month'
                    placeholder='MM'
                    required={true}
                    value={formData.dob_month}
                    onChange={handleChange}
                  />
                  <input
                    className='dob-input'
                    id='dob_year'
                    type='number'
                    name='dob_year'
                    placeholder='YYYY'
                    required={true}
                    value={formData.dob_year}
                    onChange={handleChange}
                  />
                </div>
              </section>
              <section>
                <label htmlFor=''>Gender</label>
                <div className='gender-inputs center-flex-row'>
                  <label htmlFor='man-gender-identity'>Man</label>
                  <input
                    className='gender-input'
                    id='man-gender-identity'
                    type='radio'
                    name='gender_identity'
                    required={true}
                    value='man'
                    onChange={handleChange}
                    onClick={handleRadioClick}
                    checked={checkBoxes.my}
                  />
                  <label htmlFor='woman-gender-identity'>Woman</label>
                  <input
                    className='gender-input'
                    id='woman-gender-identity'
                    type='radio'
                    name='gender_identity'
                    required={true}
                    value='woman'
                    onChange={handleChange}
                    onClick={handleRadioClick}
                    checked={checkBoxes.wy}
                  />
                </div>
              </section>
              <section>
                <label htmlFor=''>Show me</label>
                <div className='interest-inputs'>
                  <label htmlFor='man-gender-interest'>Man</label>
                  <input
                    id='man-gender-interest'
                    type='radio'
                    name='gender_interest'
                    required={true}
                    value='man'
                    onChange={handleChange}
                    onClick={handleRadioClick}
                    checked={checkBoxes.mt}
                  />
                  <label htmlFor='woman-gender-interest'>Woman</label>
                  <input
                    id='woman-gender-interest'
                    type='radio'
                    name='gender_interest'
                    required={true}
                    value='woman'
                    onChange={handleChange}
                    onClick={handleRadioClick}
                    checked={checkBoxes.wt}
                  />
                </div>
              </section>
              <section>
                <label htmlFor='about'>About us(me)</label>
                <input
                  className='about-us-input'
                  id='about'
                  type='text'
                  name='about'
                  required={true}
                  placeholder='I like long walks...'
                  value={formData.about}
                  onChange={handleChange}
                />
              </section>
            </div>
            <div className='screen-md-right'>
              <section>
                <label htmlFor='url'>Profile picture</label>
                {/* PICTURE.. */}
                <input
                  type='url'
                  name='url'
                  id='url'
                  placeholder='Enter URL'
                  required={true}
                  value={formData.url}
                  onChange={handleChange}
                />
                <div className='profile-img-container'>
                  {formData.url && (
                    <img
                      src={formData.url}
                      alt='Profile Pic Preview'
                      className='profile-img'
                    />
                  )}
                </div>
              </section>
            </div>
          </div>
          <section>
            <button type='submit' className='primary-btn form-submit-btn'>
              submit
            </button>
          </section>
        </form>
      </div>
    </>
  );
};

export default OnBoarding;
