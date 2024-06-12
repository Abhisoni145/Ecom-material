import { Box, Button, Card, TextField, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CartContext from '../Providers/cart/CartContext';

const CardItem = ({ cartItem }) => {
    const { cartDispatch,increment} = useContext(CartContext)
    
    
    
   
   
    



    const handleRemove = (id) => {
        cartDispatch({
            type: "REMOVE_CART",
            payload: id

        })
    }



    return (

        <Card sx={{ padding: "10px", margin: "20px 0px", display: "flex", alignItems: "center" }} >
            <img
                style={{ height: "200px", margin: "0px 30px" }}
                component={"img"}
                src={cartItem.image} />
            <Box >
                <Typography variant='h5'>{cartItem.title}</Typography>
                <Typography variant='h5' gutterBottom>{cartItem.price}</Typography>
                <Button variant='contained' size='small' color='error' onClick={() => handleRemove(cartItem.id)}>Remove</Button>
                <Box sx={{ display: "flex", alignItems: "center", margin: "20px 0px" }}>
                    <Button variant='contained' onClick={() => increment(cartItem.id)} >+</Button>
                    <Typography variant='h5' sx={{width:"20px"}}>{cartItem.count}</Typography>
                    <Button variant='contained' >-</Button>
                </Box>
            </Box>
        </Card>

    )
}

export default CardItem