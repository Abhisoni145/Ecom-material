import React from 'react'
import Wave from './Wave'
import { Box, Button, Container, Typography } from '@mui/material'
import HeroImge from '../assets/hero.png';

const HeroSection = () => {
    const customeStyle = {
        height: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "60px 0px",
        minHeight: "80vh",
        flexWrap: "wrap",
    }






    return (
        <Container>
            <Box sx={customeStyle}>
                <Wave />
                <Box>
                    <Typography sx={{ margin: "10px 0px " }} variant='h2'>
                        Shope anyThing anyTime...
                    </Typography>
                    <Typography sx={{ margin: "10px 0px " }} variant='body2'>
                        you can shop anything from anywhere 24/7
                    </Typography>
                    <Button sx={{ margin: "10px 0px " }} variant="outlined" color="primary">Shop Now</Button>
                </Box>
                <Box>
                    <img style={{ height: "300px" }} src={HeroImge} />
                </Box>
            </Box>
        </Container>
    )
}

export default HeroSection