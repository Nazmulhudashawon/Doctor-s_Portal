import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { height } from '@mui/system';


const appointmentbg={
    background:`url(${bg})`,
    backgroundBlendMode: "darken, luminosity",
    backgroundColor: "rgba(56, 48, 52, 0.75)",
    marginTop:"150px",
    height:'305px'
    
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentbg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img style={{ width:"400px", marginTop:"-112px"}} src={doctor} alt="" />
       
        </Grid>
        <Grid item xs={12} md={6} sx={{
        display:"flex",
        justifyContent:"flex-start",
        textAlign:'start',
        alignItems:"center"
        }}>
       <Box>

       <Typography variant="h6" style={{color:"rgb(20 209 204)", marginTop:"20px"}}>
        APPOINTMENT

        </Typography>
        <Typography variant="h4" style={{color:"white", marginTop:"20px"}}>
        Make an appointment today
        </Typography>
        <Typography variant="h6" sx={{my:"20px"}} style={{color:"white",  fontSize:"14px" }}>
        The phrase ‘Learn More’ is increasingly used as a crutch for link labels. But the text has poor information scent and is bad for accessibility is increasingly used as
        </Typography>
        
        <Button variant="contained" sx={{my:"20px"}}  style={{backgroundColor:"rgb(20 209 204)"}}>Learn More</Button>
      
  
       </Box>
        </Grid>

      </Grid>
    </Box>
    );
};

export default AppointmentBanner;