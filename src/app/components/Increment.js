import React from 'react'
import useCounter from '../hooks/useCounter';

function Increment() {
   let counter =  useCounter();
  return (
    <>
      <div>{counter}</div>
    </>
  )
}

export default Increment;
