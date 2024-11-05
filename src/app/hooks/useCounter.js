import React, {useState, useEffect} from 'react'

function useCounter(increment = true) {
    let [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        if(increment)
        setCounter(counter + 1);
        else 
        setCounter(counter - 1);    
      }, 1000);

     //return () => clearInterval(interval); 
    }, [counter]);

    return counter;
}

export default useCounter
