import React, { useEffect } from 'react'

export default function UseEffectDatafeach() {

  const dataObj ={
    name:"",
    username:"",
    email:""
  }
  const [info,setinfo]=React.useState([])
  const [PostObj, setPostObj] = React.useState(dataObj)

 useEffect(()=>{

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setinfo(data))
    },[])

  const handlechange=(e)=>{
     setPostObj({...PostObj,[e.target.name]:e.target.value})
     }

  const Adddata=()=>{
       setinfo([...info,PostObj])
      
     }
 

  return (
     <div>
        <h1>Use Effect Data Fetching</h1>
        <input type="text" placeholder='name' name='name' onChange={handlechange} />
        <input type="text" placeholder='username' name='username' onChange={handlechange}  />
        <input type="text" placeholder='email' name='email' onChange={handlechange}  />
        <button onClick={Adddata}>Adddata</button>




        <table border={1}>
            <thead>
                <tr>
                    <th>index no.</th>
                    <th>name</th>
                    <th>Username</th>
                    <th>E-mail</th>
                </tr>


            </thead>

            <tbody>
               
               {info.map((user,i)=>(
                 <tr key={i}>
                    <td>{i +1}</td>
                 <td>{user.name}</td>
                 <td>{user.username}</td>
                 <td>{user.email}</td>
             </tr>
               ))}
            </tbody>
        </table>
      
      </div>
  )
}
