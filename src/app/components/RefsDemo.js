import { useRef } from "react";
function RefsDemo() {
    const nameInputRef = useRef();
   // console.log("nameInputRef", nameInputRef);
   function showNameInputHandler() {
      console.log("nameInputRef: ", nameInputRef.current.value);
      
   }
      
    return (
        <>
        <span>Name: </span>
        <input type="text" ref={nameInputRef}  />   
        <button onClick={showNameInputHandler}>Show Name</button>
        </>
    )
};

export default RefsDemo;    