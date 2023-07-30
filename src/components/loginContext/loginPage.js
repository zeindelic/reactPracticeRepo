import { useContext, useState } from "react";
import { LoginContext } from "./loginContext";

const Login = () => {
  const { setUsername, setShowProfile } = useContext(LoginContext);

  return (
    <div>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input type="password" placeholder="password" />
      <button
        onClick={() => {
          setShowProfile(true);
        }}
      >
        Login
      </button>
    </div>
  );
};
export default Login;
