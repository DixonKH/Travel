import React from 'react';
import useCounter from '../hooks/useCounter';

function Decrement() {
    let counter = useCounter(false);
  return (
    <>
        <div>{counter}</div>
    </>
  )
}

export default Decrement
