import { useContext } from "react"
import { LoginContext } from "./loginContext"

const Profile = () => {     
     const {username} = useContext(LoginContext)

    return(
        <>
        <h1>Profile</h1>
        <h2>username: {username}</h2>
        </>
    )
}
export default Profile