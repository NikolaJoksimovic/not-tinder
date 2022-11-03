import React, { useState, useEffect } from "react";
import { IoReturnDownBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ChatHeader = ({ user, cookies, setCookie, removeCookie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("click");
    removeCookie("userId", cookies.userId);
    removeCookie("email", cookies.email);
    removeCookie("authToken", cookies.authToken);
    navigate("/");
  };
  return (
    <div className='chat-header-container'>
      <div className='chat-header-profile center-flex-row'>
        <div className='chat-header-img-container'>
          <img className='chat-header-img' src={user ? user.url : ""} alt='' />
        </div>
        <h3>{""}</h3>
      </div>
      <div className='log-out-icon-container'>
        <i className='log-out-icon'>
          <IoReturnDownBackOutline
            onClick={handleClick}
          ></IoReturnDownBackOutline>
        </i>
      </div>
    </div>
  );
};

export default ChatHeader;
