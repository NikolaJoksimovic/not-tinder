import React from "react";
import ChatDisplay from "./ChatDisplay";
import ChatHeader from "./ChatHeader";
import MatchesDisplay from "./MatchesDisplay";
import { useState } from "react";

const ChatContainer = ({ user, cookies, setCookie, removeCookie }) => {
  const [showMatches, setShowMatches] = useState(false);
  const [showChats, setShowChats] = useState(false);

  const handleMatchesClick = () => {
    setShowChats(false);
    setShowMatches(true);
  };
  const handleChatsClick = () => {
    setShowMatches(false);
    setShowChats(true);
  };
  const matches = user.matches;
  return (
    <div className='chat-conitaner'>
      <ChatHeader
        user={user}
        cookies={cookies}
        setCookie={setCookie}
        removeCookie={removeCookie}
      ></ChatHeader>
      <div className='chat-container-btns'>
        <button className='option' onClick={handleMatchesClick}>
          Matches
        </button>
        <button className='option' onClick={handleChatsClick}>
          AllChats
        </button>
      </div>
      {showMatches && (
        <MatchesDisplay
          setShowMatches={setShowMatches}
          matches={matches}
        ></MatchesDisplay>
      )}
      {showChats && <ChatDisplay setShowChats={setShowChats}></ChatDisplay>}
    </div>
  );
};

export default ChatContainer;
