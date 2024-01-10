import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
  return (
    <div>
       <h1> products</h1>

       <nav>
        <ul>
           <Link to={'firstproduct'}> <li>Firstproduct</li></Link>
           <Link to={'secondproduct'}> <li>secondproduct</li></Link>
        </ul>

       </nav>
       <Outlet/>
      
    </div>
  )
}

export default Products
