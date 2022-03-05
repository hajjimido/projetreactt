
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';

import Home from "./pages/home";
import About from "./pages/about"
import Restaurants from './pages/Restaurants';
import Navbar from './pages/navbar';
import Order from './pages/Order/index'
// import Signin from './pages/login.component';
// import Signup from './pages/signup.component';
 
  function App(){
    return(
      <>
   <Router>
   <Navbar/>

   <div className="pages">
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/restaurants" component={Restaurants}/>
      <Route path="/order" component={Order}/>
      {/* <Route path="/Sign-in" component={Signin}/>
      <Route path="/Sign-up" component={Signup}/>
      <Route path="/partners" component={Home}/> */}
      </Switch>
       </div>
      
   </Router>
</>
 
      );
    }


export default App;