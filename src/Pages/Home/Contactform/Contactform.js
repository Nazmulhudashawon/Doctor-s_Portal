import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import bg from '../../../images/appointment-bg.png'



const appointmentbg={
    background:`url(${bg})`,
    backgroundBlendMode: "darken, luminosity",
    backgroundColor: "rgba(56, 48, 52, 0.75)",
    marginTop:"150px",
    height:'500px'
    
}

const Contactform = () => {
  return (
    <Box style={appointmentbg} sx={{mb:8}} >
      <Typography variant="h5" sx={{pt:4, color:"#1ac6ff", fontWeight:700}}>Contact Us</Typography>
      <Typography sx={{color:"white"}} variant="h3">Always Connect With Us</Typography>
      
      <form>
       <Box sx={{display:'flex', flexDirection: 'column',mt:8 }} >
       <TextField
          sx={{ m:1,width:"40%", backgroundColor:"white", mx:'auto' }}
          id="outlined-size-small"
          defaultValue="Email Address"
          size="small"
          
        />
        <TextField
          sx={{ m: 1,width:"40%", backgroundColor:"white", mx:'auto' }}
          id="outlined-size-small"
          defaultValue="Subject"
          size="small"
        />
        <TextField
           sx={{ m: 1,width:"40%", backgroundColor:"white", margin:'auto',height:"100px" }}
        //   id="outlined-size-small"
        //   size="small"
          placeholder="your Message"
        />

        <Button
          type="submit"
          sx={{ mt: 3, backgroundColor: '#1ac6ff', mx:'auto', px:4 }}
          variant="contained"
        >
          Submit
        </Button>
        </Box>
      </form>
       
    </Box>
  );
};

export default Contactform;
