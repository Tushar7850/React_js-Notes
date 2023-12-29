import React,{createRef} from "react";

class Calculator extends React.Component{
    constructor(){
        super();
        this.state={
            ans:""
        }
        this.refnum1=createRef();
        this.refnum2=createRef();

    }

    render(){
      
        return (
            <div>
                <input type="text" placeholder="num1" ref={this.refnum1}  /> <br />
                <input type="text" placeholder="num2" ref={this.refnum2} /><br />
                <button onClick={()=> this.setState({ans:parseInt(this.refnum1.current.value) + parseInt(this.refnum2.current.value) })}>+</button>
                <button onClick={()=> this.setState({ans:parseInt(this.refnum1.current.value) - parseInt(this.refnum2.current.value) })}>-</button>
                <button onClick={()=> this.setState({ans:parseInt(this.refnum1.current.value) * parseInt(this.refnum2.current.value) })}>*</button>
                <button onClick={()=> this.setState({ans:parseInt(this.refnum1.current.value) / parseInt(this.refnum2.current.value) })}>/</button>
                <h2>{this.state.ans}</h2>
               
                
            </div>
        )
    }
    
}


export default Calculator;
