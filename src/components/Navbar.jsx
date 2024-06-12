import { AppBar, Badge, Button, Toolbar, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StoreIcon from '@mui/icons-material/Store';
import CartContext from '../Providers/cart/CartContext';

const Navbar = () => {
    const {cartItems} = useContext(CartContext)








    return (
        <AppBar>
            <Toolbar>
                <Typography sx={{ flexGrow: 1 }} variant='h6'  >
                    <Button variant='contained' color='warning' endIcon={<StoreIcon />}> <Link to={"/"}  >
                        Material Store..
                    </Link></Button>

                </Typography>
                <Link to={"/cart"}>


                    <Badge badgeContent={cartItems.length} color="error" >
                        <Button variant="contained" size="small" color="success" endIcon={<ShoppingCartIcon />} >
                        </Button>
                    </Badge>

                </Link>

            </Toolbar>
        </AppBar>
    )
}

export default Navbar