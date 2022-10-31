import React from "react";
import ChatInput from "./ChatInput";
import Chats from "./Chats";

const ChatDisplay = () => {
  return (
    <div className='chat-display'>
      <Chats></Chats>
      <ChatInput></ChatInput>
    </div>
  );
};

export default ChatDisplay;
