import React from "react";
import { IoReturnDownBackOutline } from "react-icons/io5";

const ChatHeader = () => {
  const dummy_profile = {
    name: "Richard Hendricks",
    url: "https://cdn.pixabay.com/photo/2022/04/05/00/27/man-7112557_960_720.jpg",
  };
  return (
    <div className='chat-header-container'>
      <div className='chat-header-profile center-flex-row'>
        <div className='chat-header-img-container'>
          <img
            className='chat-header-img'
            src='https://cdn.pixabay.com/photo/2022/04/05/00/27/man-7112557_960_720.jpg'
            alt=''
          />
        </div>
        <h3>Richard Hendricks</h3>
      </div>
      <i className='log-out-icon'>
        <IoReturnDownBackOutline></IoReturnDownBackOutline>
      </i>
    </div>
  );
};

export default ChatHeader;
