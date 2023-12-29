import React, { useEffect } from 'react'

export default function UseEffectDemo() {

  const [count, setcount] = React.useState(0)
  const [num, setnum] = React.useState(0)

  useEffect(()=>{
      console.log('%cuseEffect with empty defendency array',"color:green")

  },[])    
  
    useEffect(()=>{
        console.log('%cuseEffect with no defendency',"color:red")

    })


    useEffect(()=>{
        console.log('%cuseEffect with value defendency array',"color:blue")

    },[count])
  return (
    <div>
        <h1>Use Effect Demo</h1>
        <p>Count:{count}</p>
        <p>Number:{num}</p>
        
        <button onClick={()=>setcount(count+1)}> add count</button>
        <button onClick={()=>setnum(num + 10)}> add Number</button>

        
      
    </div>
  )
}
