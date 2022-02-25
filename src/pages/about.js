import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";
import { Component } from "react";
import logo from '../logo.png'
import chef from '../chef.png'
import bg from '../bg.jpg'

class about extends Component{
    render(){
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div class="container">
                         
        <div class="row gx-3">
        <div class="row gy-5">
        <div class="col-lg-5">
        <img src={logo} class="img-fluid" alt=""/>
         </div>
        <div class="col-lg-7">
        <h1 >Our Special Dish</h1>
            <h1>Spicy Noodles</h1>
            <button>Order Now</button>
            </div>
            </div>
            </div>
            </div>
              
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
}
export default about;
