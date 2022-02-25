import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Switch } from "react-router-dom";

import { Nav } from 'react-bootstrap';
import "./styleprojet.css"

class projet extends Component {
    render(){
  return (
  
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Nav.Link as={Link} className="navbar-brand" to={"/"}>EnsaFood</Nav.Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
              
                <Nav.Link as={Link} className="nav-link" to={"/log-in"} >Login</Nav.Link>  
              </li>
              <li className="nav-item">
                <Nav.Link as={Link} className="nav-link" to={"/sign-up"}>Sign up</Nav.Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
       
        </div>
     
   
  );
}
}
export default projet;