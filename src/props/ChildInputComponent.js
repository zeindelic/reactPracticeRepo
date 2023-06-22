import React, { useState } from "react";

const ChildInputComponent = ({ onData }) => {
  const [ChildInput, setChildInput] = useState("");
  const sendDataToParent = (e) => {
    setChildInput(e.target.value);
  };
  const sendInputContent = () => {
    onData(ChildInput);
  };

  return (
    <div>
      <input onChange={sendDataToParent}></input>
      <button onClick={sendInputContent}>update username</button>
    </div>
  );
};
export default ChildInputComponent;
