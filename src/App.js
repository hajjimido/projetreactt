
import './App.css';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import { Link } from 'react-router-dom';



import Modifier from "./pages/modifier";
import Ajouter from "./pages/ajouter";
import { Nav } from 'react-bootstrap';


 
  function App(){
    return(
   <Router>
     <div>
          <Nav fill variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link as={Link} to={"/ajouter"} >ajouter un plat</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link as={Link} to={"/modifier"} >modifier un plat</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">nos plats</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>
          </div>

      <div>
      <Switch>
      <Route path="/ajouter" component={Ajouter}/>
       <Route path="/modifier" component={Modifier}/>
       </Switch>
       </div>
      
   </Router>
 
      );
    }


export default App;
