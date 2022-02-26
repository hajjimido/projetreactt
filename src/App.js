
import './App.css';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./App.css"
import { Nav } from 'react-bootstrap';

import Home from "./pages/home";
import Restaurants from "./pages/Restaurants";

import logo from './logo.png'

  function App(){
    return(
      <div>
         <Router>
   <div>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">
      <span class="logoStyle">Resto</span>
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <Nav.Link as={Link} to={"/home"}>Home </Nav.Link>
      </li>
      <li class="nav-item">
        <Nav.Link as={Link} to={"/About"} type="button">About</Nav.Link>
      </li>
      <li class="nav-item">
        <Nav.Link as={Link} to={"/home"}>Menu</Nav.Link>
      </li>
    </ul>
    
  </div>
</nav>
</div>

<div>
<Switch>
<Route path="/home" component={Home}/>
<Route path="/home" component={Home}/>
 
 </Switch>
 </div>

</Router>
<Restaurants/>
      </div>
 
      );
    }


export default App;
