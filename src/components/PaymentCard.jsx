import { Button, Card, Grid, Typography } from '@mui/material'
import React from 'react'

const PaymentCard = ({ cartItems }) => {
    const total = cartItems.reduce((p, c) => p + c.price, 0)




    return (
        <Grid item sm={12} md={4} lg={4} >
            <Card sx={{ padding: "10px" }}>
                <Typography variant='h4'>Your Total </Typography>
                <Typography variant='h6'>Total Item :{cartItems.length}</Typography>
                <Typography variant='h3'>${total} </Typography>
                <Button variant='contained' color='success'>Pay Now</Button>
            </Card>
        </Grid>
    )
}

export default PaymentCard