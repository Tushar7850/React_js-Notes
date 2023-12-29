import React from 'react'

function Increment() {

    const [number, setnumber] = React.useState(0)
  return ( 
    <div style={{border:"1px solid black"}} >
        <h1>Increment</h1>
        <h1>{number}</h1>
        <button onClick={() => setnumber( number + 1)}>+</button>
      
    </div>
  )
}

export default Increment;
