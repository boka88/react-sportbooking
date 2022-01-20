import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Navbar = () => {
    
    return(
        <AppBar elevation={0} color='secondary'>
            <Toolbar>
                <IconButton>
                    <MenuOutlinedIcon />
                </IconButton>

                <Typography variant="h2">Home</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar