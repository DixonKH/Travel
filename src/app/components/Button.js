import React from 'react'

function Button(props) {
    console.log("Button executed!");
    
  return (
    <div>
      <button type='button' onClick={props.clickHandler}>{props.children}</button>
    </div>
  )
}

export default Button
