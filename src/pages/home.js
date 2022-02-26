import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styleshome.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";
import { Component } from "react";
import Noodles from './noodles.png'
import Pizza from './pizza.png'
import Chicken from './chicken.png'

const data=[
  {
    id:1,
    name:'Fried Chiken',
    logo:Chicken
  },
  {
    id:2,
    name:'Spicy Noodles',
    logo:Noodles
  },
  {
    id:3,
    name:'Pizza',
    logo:Pizza
  }

]

class home extends Component{
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
        {data.map(user => (
        <SwiperSlide key={user.id} className="slide"  >
        <div class="container">
                         
        <div class="row gx-3">
        <div class="row gy-5">
        
        <div class="col-lg-7">
        <h1 class="dish">Our Special Dish</h1>
            <h1>{user.name}</h1>
            <button>Order Now</button>
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
