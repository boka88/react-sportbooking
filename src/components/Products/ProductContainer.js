import React from 'react'
import { Box } from '@mui/system'
import {
    Grid,
    Typography,
    Button
} from '@mui/material'


const ProductContainer = () => {

    return (
        <Box sx={{ minHeight: '60vh', mr: 2, ml: 2, mt: -23 }}>

            {/* Featured Prouct */}
            <Grid sx={{ mb: 4 }} container spacing={2}>
                <Grid 
                 sx={{display: 'flex', flexDirection: {xs: 'column', lg: 'row', justifyContent: 'center', alignItems: 'center'}}}
                 md={6} 
                 item
                >
                    <Box sx={{width: {xs:'100%', lg: '40%'}}} component="img" src="images/products/f1.png" />
                    <Box sx={{paddingLeft: '10px', mt: {lg:20, xs:2}}}>
                        <Typography sx={{fontWeight: 'bold'}} variant='h6'>
                            Winter suits 2021
                        </Typography>
                        <Typography>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                        </Typography>
                        <Typography sx={{fontWeight: 'bold', color: '#ff4081'}} variant='h6'>
                           $520.00
                        </Typography>
                        <Button variant='outlined' size='medium'>
                            Add To Cart
                        </Button>
                    </Box>
                </Grid>
                <Grid 
                 sx={{display: 'flex', flexDirection: {xs: 'column', lg: 'row', justifyContent: 'center', alignItems: 'center'}}}
                 md={6} 
                 item
                >
                    <Box sx={{width: {xs:'100%', lg: '40%'}}} component="img" src="images/products/f2.png" />
                    <Box sx={{paddingLeft: '10px', mt: {lg:20, xs:2}}}>
                        <Typography sx={{fontWeight: 'bold'}} variant='h6'>
                            Winter suits 2021
                        </Typography>
                        <Typography>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                        </Typography>
                        <Typography sx={{fontWeight: 'bold', color: '#ff4081'}} variant='h6'>
                           $520.00
                        </Typography>
                        <Button variant='outlined' size='medium'>
                            Add To Cart
                        </Button>
                    </Box>
                </Grid>
            </Grid>

            {/* Product List */}

        </Box>
    )
}

export default ProductContainer