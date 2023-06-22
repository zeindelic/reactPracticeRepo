import React, { useState } from "react";

const ChildPracFunc = ({onData}) =>{
    const [username, setUsername] = useState('')
    const saveInputFunc = (e) => {
        setUsername(e.target.value);
    };
    const setTextValueFunc = () => {
       onData(username);
    }



    return(
        <div> 
        <input onChange={saveInputFunc}></input>
        <button onClick={setTextValueFunc}>insert username</button>
        </div>
       
    )
}

export default ChildPracFunc