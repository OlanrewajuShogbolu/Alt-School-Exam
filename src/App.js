import React from "react";
// import "./style.css"; 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import Error from "./ErrorPage.js";
// import Users from "./Users";
import About from "./About";
import ErrorBoundary from "./ErrorBoundary";


import './App.css';
import Login from "./Pages/Login";

function App() {
  return (
    <ErrorBoundary>
        <BrowserRouter>
       
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="login" element={<Login />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>


      </ErrorBoundary>
    
  );
}

export default App;
