import React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Paper, Typography } from '@mui/material';

const Information = () => {
    return (
        

<Container>
      <Grid sx={{ mt:-8, mb:8 }} container spacing={2}>
      

        <Grid item xs={12} sm={6} md={4} sx={{ pb:4}} >
        
        <Paper elevation={3} sx={{ p: 5 }} style={{backgroundColor:"rgb(20 209 204)"}}>
        <Typography variant="h6" style={{color:"white"}}>
        Opening Hours
        </Typography>
        <Typography variant="p" style={{color:"white", marginTop:"20px"}}>
        everyday 8am-8pm
        </Typography>
        </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4} >
        <Paper elevation={3} sx={{ p: 5 }} style={{backgroundColor:"rgb(58 55 63)"}}>
        <Typography variant="h6" style={{color:"white"}}>
        Visit Our Location
        </Typography>
        <Typography variant="p" sx={{mb:4}} style={{color:"white"}}>
        awal tower banani 1211
        </Typography>
        </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4} sx={{ mx:0}} >
        <Paper elevation={3} sx={{ p: 5 }} style={{backgroundColor:"rgb(20 209 204)"}}>
        <Typography variant="h6" style={{color:"white"}}>
       Contact Us
        </Typography>
        <Typography variant="p" sx={{my:"20px"}} style={{color:"white"}}>
        +880177777777
        </Typography>
        </Paper>
        </Grid>
      
      </Grid>
    
      </Container> 
    );
};

export default Information;