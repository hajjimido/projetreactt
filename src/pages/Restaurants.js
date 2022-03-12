import React,{useState} from "react";
import "./stylerestau.css";
import axios from 'axios';
import { Component } from "react";



class Restaurants extends Component{
    
    constructor(props){
        super(props);
        this.state={
            photo:[],
        }
    }

    componentDidMount(){
        this.saveStudent();
    }
    
  
    
    saveStudent = async () => {
        const res= await axios.get('/get');
        this.setState({
            photo:res.data,
        })
       
    }

    render() {
  return (
    <>
    <div id="Restaurant">
        <div className="Res-heading">
            <h1>Restaurants Available</h1> 
            <p>choose the restaurant you want to order from !</p>
         </div>
        <div className="container">
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
        </div>
    </div>

    </>
  );
}
}
export default Restaurants;
