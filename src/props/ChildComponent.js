import React from "react";


const ChildComponent = ({onData}) => {
const sendDataToParent = () => {
    const data = 'hello from Child'
    onData(data)
}


    return(
    <div>
        <button onClick={sendDataToParent}>Send Data to parent</button>

    </div>
    );
}
export default ChildComponent