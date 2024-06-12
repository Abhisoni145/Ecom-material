import { Container, Typography } from '@mui/material'
import React from 'react'

const PageNotefound = () => {
  return (
      <Container sx={{ padding: "80px 0px" }}>
          <Typography variant='h3' align='center' color={'error'}>
              404 Not found
          </Typography>
    </Container>
  )
}

export default PageNotefound;