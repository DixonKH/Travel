import React, { useState } from "react";
import "../../src/index.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { LoginContext } from "./Context/LoginContext";

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <div>
      <LoginContext.Provider value={{username, setUsername, setShowProfile}}>
         {showProfile ? <Profile /> : <Login />}
       </LoginContext.Provider>
    </div>
  );
}

export default App;
