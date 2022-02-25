import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router,Route, Switch} from "react-router-dom";

import history from "./services/history"
import Projet from "./projet"
import Resto from "./pages/resto"
import Login from "./pages/login.component";
import SignUp from "./pages/signup.component";
import Choice from "./pages/client_server_component";
import Home from "./pages/home";
import About from "./pages/about";
function App() {
  return (
  <Router >
    <Switch>
        <Route exact path='/' component={Choice} />
        <Route path="/log-in" exact >
            <Login />
        </Route>
        <Route path="/sign-up" component={SignUp} />
        
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
             
             
   <Route path="/resto" component={Resto} />
   <Route path="/projet" component={Projet} />
  
    </Switch>
    </Router>
    
  );
}
export default App;