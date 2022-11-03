import React, { useState, useEffect } from "react";
import axios from "axios";

const Chat = ({ user, clickedMatch }) => {
  const [userMessages, setUserMessages] = useState("");
  const [clickedMatchMessages, setClickedMatchMessages] = useState("");

  const getUserMessages = async () => {
    try {
      const response = await axios.get("/messages", {
        params: {
          userId: user.user_id,
          matchedUserId: clickedMatch.user_id,
        },
      });
      setUserMessages(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getClickedMatchMessages = async () => {
    try {
      const response = await axios.get("/messages", {
        params: {
          userId: clickedMatch.user_id,
          matchedUserId: user.user_id,
        },
      });
      setClickedMatchMessages(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserMessages();
    getClickedMatchMessages();
  }, []);

  let messages = [];
  if (userMessages) {
    userMessages.forEach((message) => {
      const formattedMsg = {};
      formattedMsg["name"] = user.first_name;
      formattedMsg["message"] = message.message;
      formattedMsg["timestamp"] = message.timestamp;
      messages.push(formattedMsg);
    });
  }
  if (clickedMatchMessages) {
    clickedMatchMessages.forEach((message) => {
      const formattedMsg = {};
      formattedMsg["name"] = ` ${clickedMatch.first_name}`;
      formattedMsg["message"] = ` ${message.message}`;
      formattedMsg["timestamp"] = message.timestamp;
      messages.push(formattedMsg);
    });
  }

  messages.sort((a, b) => a.timestamp.localeCompare(b.timestamp));

  return (
    <div className='chat'>
      <div>
        {messages.map((message) => (
          <div key={new Date().getTime()}>
            <h3>{message.name}</h3>
            <p>{message.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
