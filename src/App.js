
// import ConextApiDemo from "./ContextApiDemo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarReactRouterDom from "./React-Router_dom/Navbar_React_router_Dom";
import Home from "./React-Router_dom/Home";
import About from "./React-Router_dom/About";
import Services from "./React-Router_dom/Services";



function App() {
  return (
    <div>
      <BrowserRouter>
      <NavbarReactRouterDom/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
   
          


      </BrowserRouter>
    </div>
  );
}

export default App;
