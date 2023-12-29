import React,{useRef} from "react";

function Calculator() {

 const refnum1=useRef();
 const refnum2=useRef();
 
  const [ans, setans] = React.useState();                    

  return (
    <div>
      <input type="text" placeholder="num1" ref={refnum1} />
      <br />
      <input type="number" placeholder="num2" ref={refnum2}  /> <br />
      <button onClick={()=>setans(parseInt(refnum1.current.value) + parseInt(refnum2.current.value))}>+</button>
      <button onClick={()=>setans(parseInt(refnum1.current.value) - parseInt(refnum2.current.value))}>-</button>
      <button onClick={()=>setans(parseInt(refnum1.current.value) / parseInt(refnum2.current.value))}>/</button>
      <button onClick={()=>setans(parseInt(refnum1.current.value) * parseInt(refnum2.current.value))}>*</button>


      <p>{ans}</p>
    
    
    </div>
  );
}

export default Calculator;
