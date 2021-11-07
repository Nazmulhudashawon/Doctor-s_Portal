import React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Container, Paper, Typography } from '@mui/material';

const Information = () => {
    return (
        

<Container>
      <Grid sx={{ mt:-8, mb:8 }} container spacing={2}>
      

        <Grid item xs={4} sx={{ pb:4}} style={{backgroundColor:"#1ac6ff", width:"20%"}}>
        
          
        <Typography variant="h6" style={{color:"white", marginTop:"20px"}}>
        Opening Hours
        </Typography>
        <Typography variant="p" style={{color:"white", marginTop:"20px"}}>
        everyday 8am-8pm
        </Typography>
        
        </Grid>

        <Grid item xs={4} style={{backgroundColor:"black", width:"20%"}}>
        <Typography variant="h6" style={{color:"white", marginTop:"20px"}}>
        Visit Our Location
        </Typography>
        <Typography variant="p" sx={{mb:4}} style={{color:"white"}}>
        awal tower banani 1211
        </Typography>
        </Grid>
        <Grid item xs={4} sx={{ mx:0}} style={{backgroundColor:"#1ac6ff", width:"20px"}}>
        <Typography variant="h6" style={{color:"white", marginTop:"20px"}}>
       Contact Us
        </Typography>
        <Typography variant="p" sx={{my:"20px"}} style={{color:"white"}}>
        0177777777
        </Typography>
        </Grid>
      
      </Grid>
    
      </Container> 
    );
};

export default Information;