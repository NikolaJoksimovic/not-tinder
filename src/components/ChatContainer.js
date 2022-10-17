import React from "react";
import ChatDisplay from "./ChatDisplay";
import ChatHeader from "./ChatHeader";
import MatchesDisplay from "./MatchesDisplay";

const ChatContainer = () => {
  return (
    <div className='chat-conitaner'>
      <ChatHeader></ChatHeader>
      <div className='chat-container-btns'>
        <button className='option'>Matches</button>
        <button className='option'>AllChats</button>
      </div>
      <MatchesDisplay></MatchesDisplay>
      <ChatDisplay></ChatDisplay>
    </div>
  );
};

export default ChatContainer;
