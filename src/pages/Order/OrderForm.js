import React,{useEffect, useState} from 'react';
import {TextField , ButtonGroup, Grid, InputAdornment,Button as MuiButton,FormControl,InputLabel,Select as MuiSelect , MenuItem, FormHelperText } from '@mui/material';

//import ReplayIcon from '@mui/icons-material/Replay';
//import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
//import ReorderIcon from '@mui/icons-material/Reorder';

const form = {
    width : '90%',
    marginLeft: '200px', 
    marginTop:"130px"       
    
}
const styles={
    marginRight : '20px'
}

const button1 ={
    backgroundColor: "#000",
    marginLeft: '10px',
 
}
const button2 = {
    backgroundColor: "#000",
    
}
const wid = {
    width:'270px',
}

const pMethods =[
    {id: 'cash' , title: 'Cash' },
    
]



export default function OrderForm(props){
    const OrderNumberGenerator=()=>Math.floor(100000+Math.random()*900000).toString();


    const {name,label,children, color,values,
         onChange,options,  onClick, error = null,
        className, ...other}=props;

const handleClick = () =>{
    alert('h');
}
    return (
        <form style= {form} noValidate autoComplete='off' >
           <Grid container>
               <Grid item xs={3.5} style={styles}>
                    <TextField 
                        disabled
                        style = {{width: '270px'}}
                        variant={ "outlined"}
                        label="Order Number"
                        name="orderNumber"
                        value={OrderNumberGenerator()}
                        onChange={onChange}
                        {...other}
                        {...(error && {error: true, helperText: error})}
                        InputProps={{
                            startAdornment: <InputAdornment
                            position="start">#</InputAdornment>
                        }}
                    />
                    
                    <br></br>
                    <br></br>
                    {/*
                    <Select
                        label="Select Client"
                        name="ClientId"
                        value={values.clientId}
                        onChange={handleInputChange}
                        options= {clientList}
                    />*/}
                </Grid>
                <Grid item xs={3.5}>
                <FormControl 
                    style={wid}
                    variant={ "outlined"}
                    {...(error && {error: true })}>
                
                    <InputLabel>Payment Method</InputLabel>
                    <MuiSelect
                        label="Payment Method"
                        name="pMethod"
                        onChange={onChange}>
                        <MenuItem value={"cash"}>Cash</MenuItem>
                    </MuiSelect>
                    {error && <FormHelperText>{error}</FormHelperText>}
                </FormControl>
                
                    <br></br>
                    <br></br>
                    <TextField 
                        disabled
                        variant={ "outlined"}
                        label="Total"
                        name="total"
                        value={"total"}
                        onChange={onChange}
                        {...other}
                        {...(error && {error: true, helperText: error})}
                        InputProps={{
                            startAdornment: 
                            <InputAdornment
                            sx={[
                                {color: '#f3b33d',
                                fontWeight:'bolder',
                                fontSize: '1.5em' }]}
                            position="start">$</InputAdornment>
                        }}
                    />
                
                    <br></br>
                    <br></br>
                    <ButtonGroup>
                        <MuiButton
                            style={button2}
                            size="small"
                           //endIcon={<RestaurantMenuIcon/>}
                            type="submit">Submit</MuiButton>
                        <MuiButton
                            style={button2}
                            size="small"
                           //startIcon={<ReplayIcon/>}
                        />
                    </ButtonGroup>
                    <MuiButton
                        size="small"
                        variant="outlined"
                        style={button1}
                       //startIcon={<ReorderIcon/>}
                    >Orders History</MuiButton>
                   
                    
                </Grid>
                
            </Grid>
            
        </form>
    )

} 