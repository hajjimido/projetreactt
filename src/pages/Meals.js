import React from 'react';
import "./Meals.css";
import meal1 from './Burger.jpg';
import meal2 from './hotdog.jpg';
import meal3 from './pizza.jpg';
import meal4 from './tacos.jpg';
import meal5 from './salad.jpg';
import meal6 from './sandwich.jpg';
import meal7 from './fish.jpg';
import meal8 from './spaghetti.jpg';

function Meals() {
  return (
      
    <div id="MealsSection"> 
        <div className="Res-heading-T1">
          <h1>Meals Proposed</h1> 
          <p class="par">Lorem ipsum dolor sit amet, consectetur adip</p>
        </div>
        <div className="Menu">
        <div className="Food-items">
           <img src={meal1} class="img" alt=""/>
           <div className="details">
               <div className="sub">
                   <h5 className="title">Humbrger</h5>
                   <h5 className="price">25 Dh </h5>
                </div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et odio a felis mattis interdum.
                 Morbi in nunc auctor, pretium eros id, mollis augue. Mauris sed eros sed dui ullamcorper 
                </p>
                <button>Order</button>

            </div>
        </div> 
        <div className="Food-items">
           <img src={meal2} class="img" alt=""/>
           <div className="details">
               <div className="sub">
                   <h5 className="title">Hot Dog</h5>
                   <h5 className="price">20 Dh </h5>
                </div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et odio a felis mattis interdum.
                 Morbi in nunc auctor, pretium eros id, mollis augue. Mauris sed eros sed dui ullamcorper 
                </p>
                <button>Order</button>

            </div>
        </div> 
        <div className="Food-items">
           <img src={meal3} class="img" alt=""/>
           <div className="details">
               <div className="sub">
                   <h5 className="title">Pizza</h5>
                   <h5 className="price">15 Dh </h5>
                </div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et odio a felis mattis interdum.
                 Morbi in nunc auctor, pretium eros id, mollis augue. Mauris sed eros sed dui ullamcorper 
                </p>
                <button>Order</button>

            </div>
        </div> 
        <div className="Food-items">
           <img src={meal4} class="img" alt=""/>
           <div className="details">
               <div className="sub">
                   <h5 className="title">Tacos</h5>
                   <h5 className="price">20 Dh </h5>
                </div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et odio a felis mattis interdum.
                 Morbi in nunc auctor, pretium eros id, mollis augue. Mauris sed eros sed dui ullamcorper 
                </p>
                <button>Order</button>

            </div>
        </div> 
        <div className="Food-items">
           <img src={meal5} class="img" alt=""/>
           <div className="details">
               <div className="sub">
                   <h5 className="title">Salad</h5>
                   <h5 className="price">15 Dh </h5>
                </div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et odio a felis mattis interdum.
                 Morbi in nunc auctor, pretium eros id, mollis augue. Mauris sed eros sed dui ullamcorper 
                </p>
                <button>Order</button>

            </div>
        </div> 
        <div className="Food-items">
           <img src={meal6} class="img" alt=""/>
           <div className="details">
               <div className="sub">
                   <h5 className="title">Sandwich</h5>
                   <h5 className="price">12 Dh </h5>
                </div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et odio a felis mattis interdum.
                 Morbi in nunc auctor, pretium eros id, mollis augue. Mauris sed eros sed dui ullamcorper 
                </p>
                <button>Order</button>

            </div>
        </div>    
        <div className="Food-items">
           <img src={meal7} class="img" alt=""/>
           <div className="details">
               <div className="sub">
                   <h5 className="title">Fish</h5>
                   <h5 className="price">25 Dh </h5>
                </div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et odio a felis mattis interdum.
                 Morbi in nunc auctor, pretium eros id, mollis augue. Mauris sed eros sed dui ullamcorper 
                </p>
                <button>Order</button>

            </div>
        </div> 
        <div className="Food-items">
           <img src={meal8} class="img" alt=""/>
           <div className="details">
               <div className="sub">
                   <h5 className="title">Spaghetti</h5>
                   <h5 className="price">18 Dh </h5>
                </div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et odio a felis mattis interdum.
                 Morbi in nunc auctor, pretium eros id, mollis augue. Mauris sed eros sed dui ullamcorper 
                </p>
                <button>Order</button>

            </div>
        </div>
        </div>
    </div>
     
  )
}
export default Meals;
