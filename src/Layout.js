import React from "react";
import { Outlet, Link,  } from "react-router-dom";
import "./Layout.css";
// import {Login} from "../Pages"

const Layout = () => {
  return (
    <>
      <nav>
      
            <Link to="/"> Home </Link>
        
            <Link to="/about"> About </Link>
            <Link to="/login"> Login </Link>
            
          
         
         
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
