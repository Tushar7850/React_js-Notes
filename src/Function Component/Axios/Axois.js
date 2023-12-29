import React, { useEffect, useState } from 'react';
import axios from 'axios'



function AxiosDemo() {

    const postObj = {
        name: '',
        username: '',
        email: ''
    }

    const [post, setPost] = useState(postObj)
    const [postData, setPostData] = useState([]);
    const [buttonEdit,SetbuttonEdit] =useState(true)


    useEffect(() => {
      getData()
    }, [])

    const getData=()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.data)
        .then((ref) => {
            setPostData(ref)
        })
    }

    const handleOnChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    }

    const submitData = () => {

            axios.post('https://jsonplaceholder.typicode.com/users',post)
            .then((response) => response.data)
            .then((ref) => {
                setPostData([...postData, ref])
                // setPostData(ref)
            })
            


        setPost(postObj)
       SetbuttonEdit(buttonEdit === false ? true :true) 

    }

    const getPostInfo =(id)=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.data)
        .then((ref) => {
            // setPostData([...postData, ref])
           setPost(ref)
        
        })
   SetbuttonEdit(false)
    }


    const UpdateData=()=>{
        let id= post.id;
        
        axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,post)
        .then((response) => response.data)
        .then((ref) => {
            console.log(ref);
            setPostData([...postData, ref])
        //    
        })
    }

    // const DeleteData=(id)=>{
    //     axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    //     .then((response) => response.data)
    //     .then((ref) => {
    //         console.log(ref);
    //         // setPostData([...postData, ref])
    //     //    
    //     })
        
        
    // }

    return (
        <div>
            <label >Name:</label> <input type="text" placeholder='Enter name' className='border' name="name" value={post.name} onChange={handleOnChange} /> <br />
            <label >UserName:</label>  <input type="text" placeholder='Enter username' className='border' name='username' value={post.username} onChange={handleOnChange} /><br />
            <label >Email:</label>  <input type="text" placeholder='Enter email' className='border' name='email' value={post.email} onChange={handleOnChange} /><br />
           {buttonEdit ? <button onClick={()=>submitData()}>"Submit"</button> : <button onClick={()=>UpdateData()}>"Update"</button>}

            <table border={1}>
               <thead>
               <tr>
                    <th >User_ID</th>
                    <th >name</th>
                    <th >username</th>
                    <th >email</th>

                </tr>
               </thead>
               <tbody>
               {
                    postData.map((user,i) => (
                        <tr key={i}>
                            <td >{user.id}</td>
                            <td >{user.name}</td>
                            <td >{user.username}</td>
                            <td >{user.email}</td>
                            <td><button type="button" onClick={()=>getPostInfo(user.id)}>Edit</button></td>
                            {/* <td><button type="button" onClick={()=>DeleteData(user.id)}>Delete</button></td> */}
                            
                        </tr>
                    ))
                }
               </tbody>
            </table>
        </div>
    )
}

export default AxiosDemo

