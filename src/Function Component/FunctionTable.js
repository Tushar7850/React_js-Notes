import React, { useState } from 'react'

export default function FunctionTable() {


    const postobj ={
        firstname:"",
        middlename:"",
        lastname:"",
        }

        const [data, setdata] = useState(postobj)
        const[info,setinfo] =useState([])

    const Handlechange=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }

    const SumbitData=()=>{
      setinfo([...info,data])
      console.log(info);
    }
  return (
    <div>

        <input type="text"  name='firstname' placeholder='FirstName' onChange={Handlechange}/><br />
        <input type="text" name='middlename' placeholder='MiddleName' onChange={Handlechange} /><br />
        <input type="text" name='lastname' placeholder='LastName' onChange={Handlechange} /><br />
        <button type='button' onClick={SumbitData}>Submit</button>



        <table>
          <thead>
            <tr>

            <th>FirstName</th>
            <th>MiddleName</th>
            <th>LastName</th>
            </tr>
          </thead>

          
         
         {info.map((elem)=>(
          <tr>
            <td>{elem.firstname}</td>
            <td>{elem.middlename}</td>
            <td>{elem.lastname}</td>
            
          </tr>
         ))}
        </table>


      
    </div>
  )
}
