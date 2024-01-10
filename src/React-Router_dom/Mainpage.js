import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarReactRouterDom from "../React-Router_dom/Navbar_React_router_Dom";
import Home from "../React-Router_dom/Home";
import About from "../React-Router_dom/About";
import Services from "../React-Router_dom/Services";
import Products from './Products';
import Firstproduct from './Firstproduct';
import Secondproduct from './Secondproduct';

function Mainpage() {
  return (
    <div>
          <BrowserRouter>
      <NavbarReactRouterDom/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path='Products' element={<Products/>} >
            <Route path='firstproduct' element={<Firstproduct/>}/>
            <Route path='secondproduct' element={<Secondproduct/>}/>
         

        </Route>
      </Routes>
   
          


      </BrowserRouter>
      
    </div>
  )
}

export default Mainpage
