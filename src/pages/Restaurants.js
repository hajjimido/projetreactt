import React,{useState} from "react";
import "./stylerestau.css";
import axios from 'axios';
import { Component } from "react";

import { Link } from 'react-router-dom';


class Restaurants extends Component{
    
    constructor(props){
        super(props);
        this.state={
            photo:[],
        }
    }

    componentDidMount(){
        this.actualiser();
    }
    
  
    
    actualiser = async () => {
        const res= await axios.get('/get');
        this.setState({
            photo:res.data,
        })
       
    }

    render() {
  return (
    <>
    <div id="Restaurant">
        <div className="Res-heading1">
            <h1 className="Res">Restaurants Available</h1> 
            <p class="par Res">choose the restaurant you want to order from !</p>
        </div>
         <div className="container Res">
        
                    {this.state.photo.map(a =>(
                            <Link to={{
                                pathname:"/Meals",
                                state:a.name}}>
                        <div class="row">
                        <div class="col-sm">
                    <div className="box">
                        <img  src={a.photos} alt="" className="img1"/>
                        <h1 className="box-title">{a.name}</h1>   
                    </div>
                    </div>
                    </div> 
                    </Link>
                    ))}  
                    
      
                </div>
    </div>

    </>
  );
}
}
export default Restaurants;
/* <div className="container Res">
 <div class="row">

           {this.state.photo.map(a =>(
               <div class="col-sm">
            <div className="box">
                <img  src={a.photos} alt="" className="img1"/>
                <h1 className="box-title">restaurant1</h1>   
            </div>
            </div>
           ))}  
        </div> 
        </div> */