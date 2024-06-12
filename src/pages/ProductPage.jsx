import { Box, Button, Card, Chip, Container, LinearProgress, Rating, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductContext from '../Providers/Products/ProductContext'
import { fetchProduct } from '../Providers/Products/ProductAction'
import CartContext from '../Providers/cart/CartContext'

const ProductPage = () => {
  const { product, dispatch } = useContext(ProductContext)
  const {cartDispatch}=useContext(CartContext)

  // const [product, setProduct] = useState(null) // create state for prodcut 

  const params = useParams(); // use Params for id 

  // api call functio
  // const fetchProduct = async () => {  
  //   const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  //   const data = await res.json();
  //   setProduct(data);
  // }

  const getProduct = async (id) => {
    const data = await fetchProduct(id);
    dispatch({
      type: "FETCH_PRODUCT",
      payload:data,
    })
  }

  // handle add 
  const handleAdd = (productToAdd) => {
    
    cartDispatch({
      type: "ADD_TO_CART",
      payload: productToAdd,
    });
  }

  // for use Effect is mount data for dispaly
  useEffect(() => {
    // fetchProduct();
    getProduct(params.id);

  }, [])

  // if condition for create a loading page
  if (!product) {
    return (
      <Container sx={{ padding: "80px 0px" }}>
        <LinearProgress color="success" />
      </Container>
    )

  }





  return (
    <Container sx={{ padding: "90px 0px" }}>
      <Card sx={{ padding: "20px", display: "flex" }} >
        <img style={{ height: "400px", objectFit: "contain", width: "50%" }} src={product?.image} />

        <Box sx={{ margin: "0px 20px" }}>
          <Typography variant='h4' gutterBottom >
            {product?.title}
          </Typography>
          <Typography variant='body2' gutterBottom>
            {product?.description}
          </Typography>
          <Chip sx={{ margin: "20px 0px" }} label={product?.category} variant="outlined" />

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant='body2'>
              Rating :
            </Typography>
            <Rating
              name='Product Rating'
              value={product?.rating.rate}
              readOnly />
          </Box>
          <Button variant='contained' color='success' sx={{ margin: "20px 0px" }} onClick={()=>handleAdd(product)} >Add to cart</Button>
        </Box>
      </Card>
    </Container>
  )
}

export default ProductPage