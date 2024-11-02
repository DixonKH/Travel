import React, {useContext} from "react";
import { LoginContext } from "../Context/LoginContext";

function Login() {
    const {setUsername, setShowProfile} = useContext(LoginContext); 
    
    const nameHandler = (e) => {
        setUsername(e.target.value);
    }

    const loginHandler = (e) => {
        e.preventDefault();
        setShowProfile(true);
    }   
   
    return (
        <form className="box">
            <input className="userName" type="text" placeholder="Username" onChange={nameHandler} />
            <input className="userPassword" type="password" placeholder="Password" />
            <button onClick={loginHandler} className="userLogin" type="submit">Login</button>
        </form>
    );  
}

export default Login;   