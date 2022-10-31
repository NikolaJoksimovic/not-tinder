import React from "react";
import { useState } from "react";

const ChatInput = () => {
  const [textArea, setTextArea] = useState("");
  const handleChange = (e) => {};
  return (
    <div className='chat-input'>
      <textarea value={textArea} onChange={handleChange}></textarea>
      <button>send</button>
    </div>
  );
};

export default ChatInput;
