import React, {useContext} from "react";
import { UserContext } from "./ComponentA";

function ComponentD() {

    const user = useContext(UserContext);
    return (
       <div className="box">
        <h2>Component D</h2>
        <p>Hello {user}</p>
       </div>
    )   
}

export default ComponentD;