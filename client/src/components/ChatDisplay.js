import React from "react";
import ChatInput from "./ChatInput";
import Chat from "./Chat";
import { IoReturnDownBackOutline } from "react-icons/io5";

const ChatDisplay = ({ clickedMatch, setShowChat, user }) => {
  const handleCloseClick = () => {
    setShowChat(false);
  };
  return (
    <div className='chat-display'>
      <div className='chat-header'>
        <div className='img-container'>
          <img src={clickedMatch.url} alt='' />
        </div>
        <i className='cls-btn'>
          <IoReturnDownBackOutline
            onClick={handleCloseClick}
          ></IoReturnDownBackOutline>
        </i>
      </div>
      <div className='chat-body'>
        <Chat user={user} clickedMatch={clickedMatch}></Chat>
        <ChatInput></ChatInput>
      </div>
    </div>
  );
};

export default ChatDisplay;
