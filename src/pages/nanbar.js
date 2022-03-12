import { useState } from "react";
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import { NavLink} from "react-router-dom";
import "./Navbar.css";
import { Link } from 'react-scroll';

import Home from "./home";
import About from "./about";
import Aboutus from "./aboutus";
import Partners from "./Partners";

import Restaurants from './Restaurants';

  function Nav(){
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return(
      <div>
        <Router>
        <div>
          
        <nav className="navbar ">
    <div className="nav-container">
      <NavLink exact to="/" className="nav-logo navbar-brand">
        EnsaFood
      </NavLink>
      <ul className={click ? "nav-menu active navbar-right" : "nav-menu navbar-right"}>
        <li className="nav-item">
        <Link as={Link}
       to='Home'
       className='nav-links'
       activeClassName="active"
       spy={true}
       smooth={true}
       offset={-70}
       duration={10}>
          Home
       </Link>
        </li>
        <li className="nav-item">
        <Link as={Link}
        to='Restaurants'
      
       className='nav-links'
       activeClassName="active"
       spy={true}
       smooth={true}
       offset={-70}
       duration={10}>
          Restaurants
          
       </Link>
        </li>
        <li className="nav-item">
          
        <Link as={Link}
        to='About'
       className='nav-links'
       activeClassName="active"
       spy={true}
       smooth={true}
       offset={-70}
       duration={10}>
          About Us
       </Link>
        </li>
        <li className="nav-item">
        <Link as={Link}
       to='Partners'
       className='nav-links'
       activeClassName="active"
       spy={true}
       smooth={true}
       offset={-70}
       duration={10}>
          Partners
       </Link>
        </li>
        <li className="nav-item">
         
          <NavLink
            exact
            to="/Log-in"
            activeClassName="active"
            className="nav-links btn1"
            onClick={handleClick}
          >
            Log In
          </NavLink>
        </li>
        <li className="nav-item">
      
          <NavLink
           exact
           to="/Sign-up"
            activeClassName="active"
            className="nav-links btn1"
            onClick={handleClick}
          >
            Sign Up
          </NavLink>
         
        </li>
      </ul>
      <div className="nav-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </div>
  </nav>
        </div>
  
   </Router>
   <div id="Home">
       <Home/>
   </div>
   <div id="Restaurants" >
      <Restaurants/>
    </div>  
    <div id="Aboutus"><Aboutus/> </div>
    <div id="Partners"><Partners/> </div>
    <div><About/> </div>
    
 
    
     
      </div>
      
 
      );
    }

export default Nav;

/*  <Nav.Link as={Link} to={"/restaurants"}>restaurants</Nav.Link>*/
