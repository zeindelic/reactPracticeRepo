import { useState } from "react";
import Login from "./loginPage";
import Profile from "./profilePage";
import { LoginContext } from "./loginContext";

const LoginAppFunc = () => {
    const [username, setUsername] = useState('')
    const [showProfile, setShowProfile] = useState(false)

    return(
        <>
        <LoginContext.Provider value={{username,setUsername, setShowProfile}}>
        {showProfile ? <Profile/> : <Login/>}
        </LoginContext.Provider>
        </>
    )
}
export default LoginAppFunc