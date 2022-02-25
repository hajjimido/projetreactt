
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import { Link } from 'react-router-dom';

import { Nav } from 'react-bootstrap';


import { Component } from 'react';
   class resto extends Component{
       render(){
   
    return(
  
   <div>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" >Resto</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <Nav.Link as={Link} to={"/home"}>Home </Nav.Link>
      </li>
      <li class="nav-item">
        <Nav.Link as={Link} to={"/"} type="button">About</Nav.Link>
      </li>
      <li class="nav-item">
        <Nav.Link as={Link} to={"/home"}>Menu</Nav.Link>
      </li>
    </ul>
    
  </div>
</nav>
          </div>

      
  

 
      );
    }
}


export default resto;
