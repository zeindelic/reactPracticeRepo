import React, { useState } from "react";
import ChildInputComponent  from "./ChildInputComponent";

const ParentInputComponent = () => {
    const [inputDataFromChild, setInputDataFromChild] = useState('')

const handleInputData = (data) => {
    console.log(data);
    setInputDataFromChild(data)
}


return(
    <div>
        <h1>username: {inputDataFromChild}</h1>
        <ChildInputComponent onData={handleInputData}/>
    </div>
)

}

export default ParentInputComponent