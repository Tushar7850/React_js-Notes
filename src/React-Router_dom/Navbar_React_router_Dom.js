import React from 'react'
import { NavLink } from 'react-router-dom';

function NavbarReactRouterDom() {
  return (
    <div>
      <ul style={{display:"flex", justifyContent:"center", gap:"50px",backgroundColor:"purple"}}>
        <NavLink to={"/"}><li>Home</li></NavLink>
        <NavLink to={"/about"}><li>About</li></NavLink>
        <NavLink to={"/services"}><li>Services</li></NavLink>
        
      
      </ul>
    </div>
  )
}

export default NavbarReactRouterDom ;