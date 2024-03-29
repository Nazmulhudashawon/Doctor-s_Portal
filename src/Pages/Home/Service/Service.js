import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';


const Service = (props) => {
    const { name, img, description}=props.service;
    return (
        
            <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, boxShadow:0, border:0}}>

            <CardMedia
        component="img"
        style={{width:'auto', height:"80px", margin:"5px auto" }}
        image={img}
        alt="Paella dish"
      />
      <CardContent>
       
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        
        <Typography variant="body2">
          {description}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
     
    </Card>
            </Grid>
            
        
    );
};

export default Service;