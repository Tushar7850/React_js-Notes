import React from 'react'

export default function CallbackEvent() {
    const [message,setMessage] =React.useState("")

    const handlechange =(event)=>{
        setMessage(event.target.value)

    }
  return (
    <div>
<h1>Call Back Event</h1>
<p>Message : {message}</p>
<ChildComponentOne message={message} onInputChange={handlechange} />


    </div>
  )

}
  function ChildComponentOne ({message,onInputChange}){
    return(
        <div>
            <p>Message : {message}</p>
            <input type="text"  onChange={onInputChange} />
        </div>
    )
}
