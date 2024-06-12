import { Container, Grid, LinearProgress } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import ProductContext from '../Providers/Products/ProductContext';
import { fetchProducts } from '../Providers/Products/ProductAction';


const Products = () => {
    const { products, dispatch } = useContext(ProductContext);



    // stats
    // const [products, setProducts] = useState([]);

    // api fatch fucnction
    // const fetchProducts = async () => {
    //     const res = await fetch('https://fakestoreapi.com/products');
    //     const data = await res.json();
    //     setProducts(data)
    // }

    const getProducts = async () => {
        const data = await fetchProducts()
        dispatch({
            type: "FETCH_PRODUCTS",
            payload: data,
        })
    }


    // use effect for data mounting

    useEffect(() => {
        // fetchProducts();
        getProducts();
    }, []);

   







    return (
        <Container sx={{}}>
            <Grid container spacing={3}>
                {
                    products.map(product => <ProductCard key={product.id} product={product} />)
                }
            </Grid>
        </Container>
    )
}

export default Products