import React from "react";
import ComponentOne from "./ComponentOne";
import ComponentTwo from "./ComponentTwo";


class ComponentDidMount extends React.Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }


    componentDidMount(){
        console.log("Count is",this.state.count);
    }

    componentDidUpdate(){
        console.log("In Component did Update,",this.state.count);
    }

    increament=()=>{
        this.setState({count:this.state.count+1})
        console.log("update ho gaya");
    }


    render(){
        const component =this.state.count?<ComponentOne/>:<ComponentTwo/>
        return(
            <div>
            
                <h1>{this.state.count}</h1>
                <button onClick={this.increament}>+</button>
                {component}
            </div>
        )
    }
}

export default ComponentDidMount