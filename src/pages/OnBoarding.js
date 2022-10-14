import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";

const OnBoarding = () => {
  const authorizationToken = true;
  const handleSubmit = (e) => {};
  const handleChange = (e) => {};
  return (
    <>
      <Navbar setShowModal={() => {}} showModal={false}></Navbar>
      <div className='onboarding'>
        <h2>create account</h2>
        <form action='' onSubmit={handleSubmit}>
          <section>
            <label htmlFor='first_name'>FirstName</label>
            <input
              id='first_name'
              type='text'
              name='first_name'
              placeholder='First Name'
              required={true}
              onChange={handleChange}
            />
          </section>
          <section>
            <label>Birthday</label>
            <div className='dob_inputs'>
              <input
                id='dob_day'
                type='number'
                name='dob_day'
                placeholder='DD'
                required={true}
                onChange={handleChange}
              />
              <input
                id='dob_month'
                type='number'
                name='dob_month'
                placeholder='MM'
                required={true}
                onChange={handleChange}
              />
              <input
                id='dob_year'
                type='number'
                name='dob_year'
                placeholder='YYYY'
                required={true}
                onChange={handleChange}
              />
            </div>
          </section>
          <section>
            <label htmlFor=''>Gender</label>
            <div className='gender-inputs'>
              <label htmlFor='man-gender-identity'>Man</label>
              <input
                id='man-gender-identity'
                type='checkbox'
                name='man-gender-identity'
                required={true}
                value='man'
                onChange={handleChange}
                checked={false}
              />
              <label htmlFor='woman-gender-identity'>Woman</label>
              <input
                id='woman-gender-identity'
                type='checkbox'
                name='woman-gender-identity'
                required={true}
                value='woman'
                onChange={handleChange}
                checked={false}
              />
            </div>
          </section>
          <section>
            <label htmlFor=''>Show me</label>
            <div className='interest-label'>
              <label htmlFor='man-gender-interest'>Man</label>
              <input
                id='man-gender-interest'
                type='checkbox'
                name='man-gender-interest'
                required={true}
                value='man'
                onChange={handleChange}
                checked={false}
              />
              <label htmlFor='woman-gender-interest'>Woman</label>
              <input
                id='woman-gender-interest'
                type='checkbox'
                name='woman-gender-interest'
                required={true}
                value='woman'
                onChange={handleChange}
                checked={false}
              />
            </div>
          </section>

          <section>
            <label htmlFor='about'>About us(me)</label>
            <input
              id='about'
              type='text'
              name='about'
              required={true}
              placeholder='I like long wlks'
              value={""}
              onChange={handleChange}
            />
          </section>
          <section>
            <label htmlFor='url'>Profile picture</label>
            {/* PICTURE.. */}
            <input
              type='url'
              name='url'
              id='url'
              onChange={handleChange}
              required={true}
            />
          </section>
        </form>
      </div>
    </>
  );
};

export default OnBoarding;
