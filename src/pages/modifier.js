import { Component } from "react";
import axios from "axios";
import bg from '../bg.jpg'
import "./style.css"
class modifier extends Component{
state = {
    name: '',
    telephone: '',
    email: '',
    pass: '',
  
}

handleInput = (e) => {
   
   this.setState({
       [e.target.name]:e.target.value
    });

   
}


 saveStudent = async (e) => {
    e.preventDefault();
    
    try{
        

    
   const res= await axios.post('http://127.0.0.1:8000/api/etud', this.state);
    if (res.data.status===200){
        console.log(res.data.message)
        this.setState({
            name: '',
            telephone: '',
            email: '',
            pass: '',

        })
    }
    }catch(Eror){
        console.log(Eror)
    }   
}
render(){
return(
    <div style={{backgroundImage:`url(${bg})`,backgroundSize:'1600px'}} >
<div class="container">
<div class="row gx-3">
<div class="row gy-5">
   <section class="Form">
     <div class="col-lg-7">
           <form onSubmit={this.saveStudent}  >
           <label class="a" >modifier un plat</label>
               <div className="form-group mb-3">
                   
                   <input type="text" name="name" placeholder='nom' onChange={this.handleInput} value={this.state.name}  className="form-control" />
                  
               </div>
               <div className="form-group mb-3">
                  
                   <input type="text" name="telephone"  placeholder='phone' onChange={this.handleInput} value={this.state.telephone}  className="form-control" />
                  
               </div>
               <div className="form-group mb-3">
                  
                   <input type="text" name="email" placeholder='email' onChange={this.handleInput} value={this.state.email}  className="form-control" />
                  
               </div>
               <div className="form-group mb-3">
                   
                   <input type="password" name="pass" placeholder='password' onChange={this.handleInput} value={this.state.pass}  className="form-control" />
                 
               </div>
               

               <div className="form-group mb-3">
                   <button type="submit" className="btn btn-primary">modifier</button>
               </div>
           </form>

       </div>
       </section>
    </div>
   
   </div>
   </div>
   </div>
);   
}
}
export default modifier;