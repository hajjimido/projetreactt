import React, { Component } from "react";
import logo from '../chef.png';
import logo1 from '../logo.png';
import "../styleprojet.css"

export default class Login extends Component {
    render() {
        return (
            <div class="row">
                <h3>Are you a</h3>
               <div class="col">
                      <a href="/log-in"  className="choice">Student</a>
               </div>

               <div class="col">
                      <a href="/log-in"  className="choice">Snack / Restaurent</a> 
               </div>
            </div>
        );
    }
}