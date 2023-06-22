import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
    const [dataFromChild, setDataFromChild] = useState('')

const handleData = (data) => {
    setDataFromChild(data)
}


return(
    <div>
        <h1>Data from child: {dataFromChild}</h1>
        <ChildComponent onData={handleData}/>
    </div>
)

}

export default ParentComponent