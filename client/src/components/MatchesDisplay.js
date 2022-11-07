import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { IoReturnDownBackOutline } from "react-icons/io5";
import ChatDisplay from "./ChatDisplay";

const MatchesDisplay = ({ setShowMatches, matches, user }) => {
  const [showChat, setShowChat] = useState(false);
  const [clickedMatch, setClickedMatch] = useState({});
  const [matchedProfiles, setMatchedProfiles] = useState(null);
  const [loading, setLoading] = useState(true);

  // MATCHED IDs
  const matchedUserIds = matches.map(({ user_id }) => user_id);

  const handleChatClick = (match) => {
    setClickedMatch(match);
    setShowChat(true);
  };
  const handleCloseClick = () => {
    setLoading(true);
    setShowMatches(false);
  };

  const getMatches = async () => {
    // URL
    let url = window.location.href;
    url = url.substring(0, url.lastIndexOf("/"));

    // comment next line for app build
    // url = "http://localhost:8000/dashboard";

    try {
      const response = await axios.get(`${url}/users/matches`, {
        params: { userIds: JSON.stringify(matchedUserIds) },
      });
      setMatchedProfiles(response.data);
    } catch (error) {
      console.log("This is the error", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getMatches();
  }, []);

  return loading ? (
    <></>
  ) : (
    <div className='matches-display'>
      <div className='matches-display-header'>
        <h2>Matches</h2>
        <i className='cls-btn'>
          <IoReturnDownBackOutline
            onClick={handleCloseClick}
          ></IoReturnDownBackOutline>
        </i>
      </div>
      <div className='matches-list'>
        {matchedProfiles &&
          matchedProfiles.map((item) => (
            <div
              key={item.user_id}
              className='matched-item'
              onClick={() => handleChatClick(item)}
            >
              <div className='img-container'>
                <img src={item.url} alt='' />
              </div>
              <h3>{item.first_name}</h3>
            </div>
          ))}
      </div>
      {showChat && (
        <ChatDisplay
          clickedMatch={clickedMatch}
          setShowChat={setShowChat}
          user={user}
        ></ChatDisplay>
      )}
    </div>
  );
};

export default MatchesDisplay;
