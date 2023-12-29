import React from "react"

class DataFeach extends React.Component{

   constructor(){
    super();
    this.state={
        // data:[
        //     {
        //   username:"",
        //   name:"",
        //   email:"",
        //     }
        // ]
        // ,
        info:[]
    }
    

   }


    componentDidMount=()=>{
        console.log("hiiiii");
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(res=> {
            this.setState({info:res})
                console.log(res)
            } )
        
    }


//     handlechange=(e)=>{
//         this.setState({data:{...this.state.data,[e.target.name]:e.target.value}})
//     }


//    Adddata=()=>{
//     console.log(this.state.data)

//    }
    

    render(){
        return(
            <div style={{textAlign:"center"}}>
                
                <h1>GET DATA FROM API IN COMPLEX TABLE</h1>

                {/* <input type="text" placeholder="name" name="name" onChange={this.handlechange}  />
                <input type="text" placeholder="username" name="username"   onChange={this.handlechange} />
                <input type="text" placeholder="email"  name="email"  onChange={this.handlechange} />

                <button onClick={this.Adddata}>Adddata</button>
                <br />
                <br />
                <br /> */}

                {
                    this.state.data ? this.state.data.id:""
                }




                <table border={1}>
                    <thead>
                     <tr>
                     <th rowSpan={3}>id</th>
                        <th rowSpan={3}>name</th>
                        <th rowSpan={3}>username</th>
                        <th rowSpan={3}>email</th>
                        <th rowSpan={3}>phone</th>
                        <th rowSpan={3}>website</th>

                        <th colSpan={6}>address</th>
                        <th colSpan={3}>company</th>

                     </tr>
                     <tr>
                        <th rowSpan={2}>city</th>
                        <th rowSpan={2}>suite</th>
                        <th rowSpan={2}>street</th>
                        <th rowSpan={2}>zipcode</th>
                        <th colSpan={2} >goe</th>

                        <th rowSpan={2}>name</th>
                        <th rowSpan={2}>bs</th>
                        <th rowSpan={2}>catchPhrase</th>
                     </tr>
                     <tr>
                        <th>lat</th>
                        <th>lng</th>
                     </tr>
                    </thead>
                    
                    
                    


                    <tbody>
                       {this.state.info.map((elem,i)=>(
                        <tr key={i}>
                        
                            <td>{elem.id}</td>
                            <td>{elem.name}</td>
                            <td>{elem.username}</td>
                            <td>{elem.email}</td>
                            <td>{elem.phone}</td>
                            <td>{elem.website}</td>

                            <td>{elem.address.city} </td>
                            <td>{elem.address.suite}</td>
                            <td>{elem.address.street}</td>
                            <td>{elem.address.zipcode}</td>

                            <td>{elem.address.geo.lat}</td>
                            <td>{elem.address.geo.lng}</td>
                            

                            <td>{elem.company.name}</td>
                            <td>{elem.company.bs}</td>
                            <td>{elem.company.catchPhrase}</td>
                          

                            
                          

                        </tr>
                       ))}
                    </tbody>
                </table>



            </div>
        )
    }
}

export default DataFeach;