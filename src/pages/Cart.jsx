import { Box,  Container, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import CardItem from '../components/CardItem'
import PaymentCard from '../components/PaymentCard'
import CartContext from '../Providers/cart/CartContext'

const Cart = () => {

    const{cartItems}=useContext(CartContext)




  return (
      <Container sx={{ padding: "80px 0px" }}>
          <Typography variant='h2'>Your Cart : </Typography>


          <Box sx={{padding:"20px 0px "}}>
              <Grid container spacing={2}>
              <Grid item sm={12} md={8} lg={8} >
                      {
                          cartItems.map((cartItem) => <CardItem key={cartItem.id} cartItem={cartItem} />)
                  }
                  
              </Grid>
                  <PaymentCard cartItems={cartItems} />
                  

                  
              </Grid>
          </Box>
    </Container>
  )
}

export default Cart