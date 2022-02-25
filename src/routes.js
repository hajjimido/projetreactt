import Projet from "./projet"
import Resto from "./pages/resto"
import { Switch,Route } from "react-router-dom"
    
export default function routes(){
    <Switch>
        <Route path="/" component={Projet} />
        <Route path="/resto" component={Resto} />
    </Switch>

}
