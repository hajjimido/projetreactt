import { Grid } from '@mui/material';
import React, { Component } from 'react';
import OrderForm from './OrderForm';


const OrderNumberGenerator=()=>Math.floor(100000+Math.random()*900000).toString();


class Order extends Component{
    render(){
    return (
        <Grid container >
            <Grid item xs={12}>
                <OrderForm/>
                <hr ></hr>
            </Grid>
        </Grid>
    )
}
}
export default Order;