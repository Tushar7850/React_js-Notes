import React from "react";

class Mounting extends React.Component{
    // constructor is use for initalization 
    constructor(){   
        super();
        console.log("constructor")

        this.state={
            number:0
        }
    }

    componentDidMount=()=>{
        console.log("mounting")
    }
    render(){
        console.log("render")
        return(
            <div>
                <h1>Mounting</h1>
                <h2>{this.state.number}</h2>
                <button onClick={()=>this.setState({number:this.state.number + 1})}>add</button>

                
            </div>
        )
    }
}
export default Mounting ;