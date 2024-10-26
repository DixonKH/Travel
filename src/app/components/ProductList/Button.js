import React from "react";

function Button(props) {
    console.log("Button component executed!");
    
    return (
        <button onClick={props.eventHandler} disabled={props.disable} class="btn btn-primary">{props.children}</button>
    );  
}

export default Button;  