import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Button, Container, Typography } from '@mui/material';
import { Box} from '@mui/system';

const BG ={
    background:`url(${bg})`,
    height:"600px"
}
const verticalcenter={
    display:"flex",
    alignItems:"center",
    height:"450px"

}

const Banner = () => {
    return (
        <Container style={BG} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5} sx={{...verticalcenter,textAlign:"start"}}>
        <Box>
        <Typography variant="h3" sx={{my:"20px",textAlign:"start"}}>
      Your New Smile <br /> Starts Here

        </Typography>
        <Typography variant="h6" sx={{my:"20px",color:"gray", fontSize:"14px"}} >
        The phrase ‘Learn More’ is increasingly used as a crutch for link labels. But the text has poor information scent and is bad for accessibility
        </Typography>
        <Button variant="contained" sx={{my:"20px"}}  style={{backgroundColor:"rgb(20 209 204)"}}>Get Appointment</Button>
      

        </Box>
         
        </Grid>
        <Grid item xs={12} md={7} style={verticalcenter}>
         <img style={{width:"100%"}} src={chair} alt="" />
        </Grid>
        
       
      </Grid>
    </Container>
    );
};

export default Banner;