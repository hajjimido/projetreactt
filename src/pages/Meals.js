import {React,Component} from 'react';
import "./Meals.css";
import axios from 'axios';


class Meals extends Component {
   
   
    constructor(props){
        super(props);
        this.state={
           menu:[],
        }
    }
    componentDidMount(){
        this.actualisermenu();
    }
    
  
    
    actualisermenu = async () => {
        const res= await axios.get('/getmenus');
        
      
        this.setState({
            menu:res.data,
        })
       
    }
   
    actualisermenuselect = async () => {
        const res= await axios.get('/select');
        this.setState({
            menu:res.data,
        })
       
    }

    render(){
        const data=this.props.location.state;
        const alo=this.state.menu.filter(e=>{
            return e.restau == data;
        })
        console.log(data)

        
        
  return (
      
    <div id="MealsSection"> 
        <div className="Res-heading-T1">
          <h1>Meals Proposed</h1> 
          <p class="par">Lorem ipsum dolor sit amet, consectetur adip</p>
        </div>
        <div className="Menu">
        {alo.map(m =>(
        <div className="Food-items">
           <img src={m.path} class="img" alt=""/>
           <div className="details">
               <div className="sub">
                   <h5 className="title">{m.title}</h5>
                   <h5 className="price">{m.price}</h5>
                </div>
                <p>
                   {m.text}

                </p>
                <button>Order</button>

            </div>
        </div> 
           
         ))}  
      
            </div>
        </div>
    
  )
        }
        
}
export default Meals;
