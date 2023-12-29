import React from "react";


class LifeCyclemethod extends React.Component{
    constructor(){
        super();
        this.state = {
            number:0 
        }

        }

        increment =()=>{
            this.setState({number:this.state.number+1})
        }

        render(){
            return(
                <div style={{border:"1px solid black"}}>
                    <h1>{this.state.number}</h1>
                    <button onClick={this.increment}>Increment</button>
                </div>
            )
        }

}


export default LifeCyclemethod;