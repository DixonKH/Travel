import React, { useReducer } from "react";
import "../../src/index.css";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return  {
        name: state.name,
        age: state.age + 1};
    case "decrement":
      return {age: state.age - 1};
    case "change_name": 
         return {
          name: action.nextName,
          age: state.age
        };
    default:
      return state;
  } 

}

function App() {
  const [state, dispatch] = useReducer(reducer, {name: "", age: 28});

  function incrementHandler() {
    dispatch({type: "increment"});
  }

  function decrementHandler() {
    dispatch({type: "decrement"});
  }

  function changeNameHandler(e) {
    dispatch({type: "change_name", nextName: e.target.value});
  } 

  return (
    <div>
      <button onClick={incrementHandler}>Increment your age</button>
      <h3>{state.age}</h3>
      <button onClick={decrementHandler}>Decrement your age</button>
      <input type="text" value={state.name} onChange={changeNameHandler} />  
      <h3>Your name is: {state.name}</h3>  

    </div>
  );
}

export default App;
