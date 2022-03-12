import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import logo from '../logo.png';

import { useHistory } from "react-router-dom";

function Login(props) {
    
const history = useHistory();

    
    
        return (
            <div class="row">
    <div class="col">
    <img src={logo} alt="Logo" className="img-fluid"/> 
    </div>
    <div class="col">
            <form>
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div><br/>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div><br/>
                
                <button type="submit" className="btn btn-primary btn-block" onClick={() => history.push('/resto')} >Submit</button>
               
                <p className="forgot-password text-right">
               
                    Forgot <a href="#">password?</a>
                </p>
            </form>
            </div>
            </div>
        );
    }
export default Login;