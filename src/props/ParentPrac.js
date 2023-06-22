import React, { useState } from "react";
import ChildPracFunc from "./ChildPrac";

const ParentPracFunc = () => {
    const [usernameShown, setUsernameShown] = useState('')

    const setUsername = (data) => {
        setUsernameShown(data)
    }

    return(
        <div>
            <h1>usernme: {usernameShown}</h1>
            <ChildPracFunc onData={setUsername}/>
        </div>

    );

}

export default ParentPracFunc
