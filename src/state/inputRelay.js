import React, { useState } from 'react';

const Counter = () => {
    const [inputText, setInputText] = useState("");

    const handleChange = (e) => {
      // 👇 Store the input value to local state
      setInputText(e.target.value);
    };
  
    return (
        <div>
          <input type="text" onChange={handleChange} value={inputText} />
    
          {/* 👇 Use the input value from state */}
          <p>Your input: {inputText}</p>
        </div>
      );
}

export default Counter