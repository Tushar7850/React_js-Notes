import React, { createContext, useContext } from "react"

const MyContext=createContext()

function ConextApiDemo(){

    const[number,setNumber]=React.useState(100)

    const count = 10

    return(
        <MyContext.Provider value={[number,count,setNumber]}>
            <div>
                <h1>Context API Demo!!!</h1>
                <p>Number : {number}</p>
                <p>Count :{count}</p>
                <COne />
                <CTwo/>
            </div>
        </MyContext.Provider>
    )

}

function COne(){

    const [number,count,setNumber]=useContext(MyContext)

    return(
        <div>
            <p>C One Component!!!</p>
            <p>Number : {number}</p>
            <p>Count :{count}</p>
            <button onClick={()=>setNumber(number + 1 )}>Add</button>
        </div>
    )

}

function CTwo(){

    
    const [number]= useContext(MyContext)

    return(
        <div>
            <p>C Two Component!!!</p>
            <p>Number :{number}</p>
        </div>
    )

}

export default ConextApiDemo