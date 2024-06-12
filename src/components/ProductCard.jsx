import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'




const ProductCard = ({product}) => {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} >
            <Card>
                <CardMedia sx={{ height: "260px" }} image={product.image} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" noWrap>
                        {product.title}
                    </Typography>

                </CardContent>
                <CardActions>
                    <Link to={`/product/${product.id}`}><Button size="small">Learn More</Button></Link>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default ProductCard