import React from 'react'

function Span(props) {
    console.log("Span executed!");  
  return (
    <div>
      {props.children}
    </div>
  )
}

export default React.memo(Span);
