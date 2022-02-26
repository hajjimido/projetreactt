import React from "react";
import "./styles.css";
import { Component } from "react";
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';


class Restaurants extends Component{
    render(){
  return (
    <>
    <div id="Restaurant">
        <div className="Res-heading">
            <h1>Restaurants Available</h1> 
            <p>choose the restaurant you want to order from !</p>
         </div>
        <div className="container">
            <div className="box">
                <img  src={img1} alt="" className="img1"/>
                <h1 className="box-title">restaurant1</h1>   
            </div>

            <div className="box">
                <img  src={img2} alt="" className="img1"/>    
                <h1 className="box-title">restaurant2</h1>      
            </div>
            <div className="box">
                <img  src={img3} alt="" className="img1"/>
                <h1 className="box-title">restaurant3</h1>
            </div>
            <div className="box">
                <img  src={img4} alt="" className="img1"/>
                <h1 className="box-title">restaurant4</h1>
            </div>      
        </div>
    </div>

    </>
  );
}
}
export default Restaurants;
