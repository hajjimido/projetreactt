import './App.css';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';


import Nav from './pages/nanbar'
import Order from './pages/Order/index'
import Login from './pages/login.component (1)';
import SignUp from './pages/signup.component';
import Meals from './pages/Meals';
 
  function App(){
    return(
    
<Router>
   <div className="pages">
      <Switch>
      <Route exact path="/" component={Nav}/>
      <Route exact path="/order" component={Order}/>
      <Route path="/Sign-in" component={Login}/>
      <Route path="/Sign-up" component={SignUp}/>
      <Route path="/Meals" component={Meals}/>
      
      </Switch>
       </div>
      
   </Router>

      );
    }


export default App;
