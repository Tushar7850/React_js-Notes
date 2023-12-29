import React, { useEffect, useState } from 'react';
import axios from 'axios'



function ShopApiDemo() {
    const [ApiData, setApiData] = useState([]);


    useEffect(() => {
      getData()
    }, [])

    const getData=()=>{
        axios.get('https://dummyjson.com/products')
        .then((response) => response.data)
        .then((ref) => {
            setApiData(ref.products)
            console.log(ref);
        })
    }

    return (
        <div>
            {ApiData.map((elem)=>(
                <div>
                    <h1>{elem.title}</h1>
                    <p>{elem.description}</p>

                    <div style={{display:'flex'}}>
                    <img height={"150px"} width={"150px"} src={elem.images[0]} alt="" />
                    <img height={"150px"} width={"150px"} src={elem.images[1]} alt="" />
                    <img height={"150px"} width={"150px"} src={elem.images[2]} alt="" />
                    <img height={"150px"} width={"150px"} src={elem.images[3]} alt="" />
                    </div>

                </div>
            ))}
        </div>
    )
}

export default ShopApiDemo

