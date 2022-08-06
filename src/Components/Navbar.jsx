import { Box, Button } from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom';

export const Navbar =()=>{

    return(
      <Box variant="div" sx={{backgroundColor:"black",width:"100%",display:"flex",justifyContent:"end", height:"40px"}}>
        <Box variant="div" sx={{margin:"5px",marginRight:"30px"}}>
            <Link to="/login">
            <Button variant="outlined" sx={{backgroundColor:"white", height:"100%","&:hover":{
        backgroundColor:"aliceblue"
       }}}>Login</Button>

            </Link>
      
        </Box>


      

      </Box>

   )
}