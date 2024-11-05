import React from 'react'

function Span(props) {
    console.log("Span executed!");  
  return (
    <div>
      {props.children[0]}
    </div>
  )
}

export default React.memo(Span);
