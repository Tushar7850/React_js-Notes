import React from "react"

class ComponentTwo extends React.Component{
    componentWillUnmount(){
        console.log("component Two will unmounted")
    }

    render(){
        return(
            <div>
                <h1>Component Two</h1>
                <p>This is Component Two.</p>
            </div>
        )
    }
}

export default ComponentTwo