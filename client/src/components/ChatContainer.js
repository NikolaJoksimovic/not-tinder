import React from "react";
import ChatHeader from "./ChatHeader";
import MatchesDisplay from "./MatchesDisplay";
import { useState } from "react";

const ChatContainer = ({ user, cookies, setCookie, removeCookie }) => {
  const [showMatches, setShowMatches] = useState(false);

  const handleMatchesClick = () => {
    setShowMatches(true);
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
      </div>
      {showMatches && (
        <MatchesDisplay
          setShowMatches={setShowMatches}
          matches={matches}
          user={user}
        ></MatchesDisplay>
      )}
    </div>
  );
};

export default ChatContainer;
