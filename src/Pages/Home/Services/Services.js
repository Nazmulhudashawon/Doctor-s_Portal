import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import Service from '../Service/Service';
import Typography from '@mui/material/Typography';


const services =[
    {
        name:"fluoride",
        img:fluoride,
        description:"bled it to make a type specimen book. It has survived not only five centuries, but also the leap into" 

    },
    {
        name:"cavity",
        img:cavity,
        description:"bled it to make a type specimen book. It has survived not only five centuries, but also the leap into"  

    },
    {
        name:"whitening",
        img:whitening,
        description:"bled it to make a type specimen book. It has survived not only five centuries, but also the leap into" 
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
      <Container>
      <Typography variant="h5" sx={{ fontWeight: 500,m:2, color: 'success.main' }} component="div">
         Our Services
        </Typography>
      <Typography sx={{ fontWeight: 600, mb:3 }} variant="h4" component="div">
        Services we Provide
        </Typography>
      <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
            services.map(service=> <Service service={service}></Service>)
        } 
        </Grid>
      </Container>
      </Box>
    );
  }

export default Services;