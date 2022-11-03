import React, { useState, useEffect } from "react";

const ChatInput = () => {
  const [textArea, setTextArea] = useState("");
  const handleChange = (e) => {};

  return (
    <div className='chat-input center-flex-row'>
      <textarea value={textArea} onChange={handleChange}></textarea>
      <button className='send-btn'>send</button>
    </div>
  );
};

export default ChatInput;
