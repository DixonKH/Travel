import React, { useCallback, useState, useMemo } from "react";
import "../../src/index.css";
import Button from "./components/Button";
import Span from "./components/Span";

function App() {
   let [count, setCount] = useState(0);
   let [activate, setActivate] = useState(false);

  let decrement = useCallback(function() {
    if(activate)
       setCount(count - 1);
  }, [activate]);

    let increment = useCallback(function() {
      if(activate)
      setCount(count + 1); 
    }, [activate]);

    function activatehandler() {
      setActivate(!activate);
      setCount(0);
      console.log("Activated!");  
    }

    console.log("App executed!");
    let list = useMemo(() => {
      return [100, 200];
    }, []);

  return (
    <div>
      <Button clickHandler={decrement}>-</Button>
      <Span>{list}</Span>
      <Button clickHandler={increment} >+</Button>
      <Button clickHandler={activatehandler}>Activate</Button>
    </div>
  );
}

export default App;
