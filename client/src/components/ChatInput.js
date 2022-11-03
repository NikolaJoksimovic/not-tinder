import React, { useState, useEffect } from "react";

const ChatInput = () => {
  const [textArea, setTextArea] = useState("");
  const handleChange = (e) => {};

  return (
    <div className='chat-input center-flex-row'>
      <input id='textarea' type='text' />
      <button className='send-btn'>
        <h5>send</h5>
      </button>
    </div>
  );
};

export default ChatInput;
