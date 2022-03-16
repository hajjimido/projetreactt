import React from 'react';
import logo from '../logo.png';
import "./AboutStyles.css";

function aboutus() {
  return (
    <div id="About">        
        <div className="Res-heading">
          <h1>About us</h1> 
          <p classNamee="par">Lorem ipsum dolor sit amet, consectetur adip</p>
        </div>
        <div className="container">
            <img src={logo} class="img" alt=""/>
            <div className="content">
                <h3 className="title">Best and Efficient Delivery !!!!</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et odio a felis mattis interdum. Morbi in nunc auctor, pretium eros id, mollis augue. Mauris sed eros sed dui ullamcorper euismod at gravida nisi. Praesent euismod nunc quis libero aliquam maximus. Cras sed ultricies mauris, at vulputate velit. Integer pretium, neque aliquet placerat facilisis, ante enim commodo eros, imperdiet euismod odio nulla vitae augue. Proin interdum dictum felis ut egestas.</p> 
            </div>
        </div>
    </div>
  )
}


export default aboutus;
