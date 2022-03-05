import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import axios from 'axios'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styleshome.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";
import { Component } from "react";




class home extends Component{
 
  constructor(props){
    
    super(props);
    this.state={
        logo:[],
    }
    
  }
    

  


handleClick =(o) =>{
 alert (o.logo)
}



componentDidMount(){
    this.saveStudent();
}



saveStudent = async () => {
    const res= await axios.get('/gethome');
    this.setState({
        logo:res.data,
    })
   
}

    render(){
  return (
    <>
      <Swiper  
        spaceBetween={20}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        scrollbar={{draggable:true}}
        modules={[ Navigation, Pagination]}
        
        onSlideChange={()=> console.log('slide change')}
        onSwiper={swiper =>console.log(swiper)}
      >
        {this.state.logo.map(user => (
        <SwiperSlide key={user.id} className="slide"  >
        <div class="container">
                         
        <div class="row gx-3">
        <div class="row gy-5">
        
        <div class="col-lg-7">
        <h1 class="dish">Our Special Dish</h1>
            <h1>{user.path}</h1>
            <a href="/order">
             <button onClick={()=>this.handleClick(user)}>Order Now</button>
            </a>
            </div>
            <div class="col-lg-5">
        <img src={user.logo} class="img-fluid" alt=""/>
         </div>
            </div>
            </div>
            </div>
              
        </SwiperSlide>
        ))}
       
      </Swiper>
    </>
  );


}
}


export default home;



