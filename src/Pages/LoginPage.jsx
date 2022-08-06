
import { Label } from '@mui/icons-material';
import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';

export const Login=()=>{
    return(
        <Box variant="div" className="login" sx={{width:"400px",  margin:"auto",marginTop:"50px"}}>
            <Typography variant="h4" sx={{margin:"10px",fontWeight:"700"}}>LOGIN</Typography>
            <TextField  variant="outlined" size='small' label='Email' sx={{margin:"10px"}}/><br/>
            <TextField variant="outlined" size='small' label='Password' sx={{margin:"10px"}}/><br/>
            <Button variant="contained" sx={{margin:"10px"}}>Contained</Button>
        </Box>
    )
}