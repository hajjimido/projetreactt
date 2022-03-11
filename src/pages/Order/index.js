import { Component } from "react";
import react from 'react'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
class Order extends Component{
    render(){
       
        const data=this.props.location.state;
       
        return(
            
            <MDBTable striped>
      <MDBTableHead>
        <tr>
          <th scope='col'>menu</th>
          <th scope='col'>about</th>
          
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <th scope='row'>prix</th>
          <td>{data[0].name}</td>
          
        </tr>
        <tr>
          <th scope='row'>paiment</th>
          <td>cash</td>
          
        </tr>
        <tr>
          <th scope='row'>cliker sur</th>
          <td colSpan={2}><button>commander</button></td>
          
        </tr>
      </MDBTableBody>
    </MDBTable>
        )
    }

}
export default Order;