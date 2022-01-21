import React from 'react'
import { 
    AppBar, 
    Toolbar, 
    IconButton, 
    Typography, 
    Button,
    Badge
} from '@mui/material'

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import { Box } from '@mui/system';

const Navbar = () => {

    return (
        <AppBar elevation={0} sx={{ backgroundColor: 'white' }}>
            <Toolbar>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%'
                    }}
                    component='div'
                >
                    {/* Logo */}
                    <Box>
                        <IconButton>
                            <MenuOutlinedIcon />
                        </IconButton>
                    </Box>

                    {/* Link */}
                    <Box sx={{ display: 'flex' }}>
                        <Typography sx={{ marginRight: '20px', cursor: 'pointer', color: '#616161' }}>Home</Typography>
                        <Typography sx={{ marginRight: '20px', cursor: 'pointer', color: '#616161' }}>Brand</Typography>
                        <Typography sx={{ marginRight: '20px', cursor: 'pointer', color: '#616161' }}>Men</Typography>
                        <Typography sx={{ marginRight: '20px', cursor: 'pointer', color: '#616161' }}>Women</Typography>
                        <Typography sx={{ marginRight: '20px', cursor: 'pointer', color: '#616161' }}>FAQ</Typography>
                    </Box>

                    {/* Button links */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button sx={{backgroundColor: '#ff4081'}} disableElevation variant='contained'>
                            Account
                        </Button>
                        <IconButton>
                            <Badge badgeContent={4} color="primary">
                                <ShoppingBasketIcon color='action' />
                            </Badge>
                        </IconButton>
                    </Box>

                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar