import React,{useState} from "react";
import "./stylerestau.css";
import axios from 'axios';
import { Component } from "react";
import img1 from './Burger.jpg';
import img2 from './hotdog.jpg';
import img3 from './pizza.jpg';
import img4 from './tacos.jpg';
import { Link } from 'react-router-dom';


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
        <div className="Res-heading1">
            <h1 className="Res">Restaurants Available</h1> 
            <p class="par Res">choose the restaurant you want to order from !</p>
        </div>
         <div className="container Res">
                <Link as={Link} to={"/Meals"}>
                        <div className="box">
                            <img  src={img1} alt="" className="img1"/>
                            <h1 className="box-title">restaurant2</h1>   
                        </div>
                    </Link>
                    <Link as={Link} to={"/Meals"}>
                        <div className="box">
                            <img  src={img2} alt="" className="img1"/>
                            <h1 className="box-title">restaurant2</h1>   
                        </div>
                    </Link>
                   
                    <Link as={Link} to={"/Meals"}>
                        <div className="box">
                            <img  src={img4} alt="" className="img1"/>
                            <h1 className="box-title">restaurant2</h1>   
                        </div>
                    </Link>
                    <Link as={Link} to={"/Meals"}>
                        <div className="box">
                            <img  src={img3} alt="" className="img1"/>
                            <h1 className="box-title">restaurant3</h1>   
                        </div>
                    </Link>
                    
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