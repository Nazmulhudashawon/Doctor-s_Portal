import React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Paper, Typography} from '@mui/material';
import people1 from '../../../images/people-1.png'
import people2 from '../../../images/people-2.png'
import people3 from '../../../images/people-3.png'
import { Box } from '@mui/system';


const Testimonial = () => {
  return (
    <Container>
      <Typography
        sx={{ mb: 2, mt: 10 }}
        variant="h6"
        style={{ textAlign: 'left', color: 'rgb(20 209 204)' }}
      >
        TESTIMONIAL
      </Typography>
      <Typography variant="h4" style={{ textAlign: 'left' }}>
        What's Our Patients
        <br /> Says
      </Typography>

      <Grid sx={{ my: 4 }} container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 5 }}>
            <Typography variant="caption" display="block" component="div">
              The different purposes of patient experience data direct the type
              of information collected, the way it is analysed and how it is
              subsequently used.
            </Typography>
            <Box sx={{display:'flex',flexDirection:'row', justifyContent:'center',alignItems:'center', mt:4}}>
                <img src={people1} alt="" />
                <Box sx={{display:'flex',flexDirection:'column', m:4}}>
                <Typography variant="caption" sx={{fontWeight:600, color:'rgb(20 209 204)'}} >
              Winson Herry
            </Typography>
                <Typography variant="caption" >
             California
            </Typography>
            </Box>
            </Box>  
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 5 }}>
            <Typography variant="caption" display="block" component="div">
              The different purposes of patient experience data direct the type
              of information collected, the way it is analysed and how it is
              subsequently used.
            </Typography>
            <Box sx={{display:'flex',flexDirection:'row', justifyContent:'center',alignItems:'center', mt:4}}>
                <img src={people2} alt="" />
                <Box sx={{display:'flex',flexDirection:'column', m:4}}>
                <Typography variant="caption" sx={{fontWeight:600, color:'rgb(20 209 204)'}} >
              Winson Herry
            </Typography>
                <Typography variant="caption" >
             California
            </Typography>
            </Box>
            </Box>  

          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 5 }}>
            <Typography variant="caption" display="block" component="div">
              The different purposes of patient experience data direct the type
              of information collected, the way it is analysed and how it is
              subsequently used.
            </Typography>
            <Box sx={{display:'flex',flexDirection:'row', justifyContent:'center',alignItems:'center', mt:4}}>
                <img src={people3} alt="" />
                <Box sx={{display:'flex',flexDirection:'column', m:4}}>
                <Typography variant="caption" sx={{fontWeight:600, color:'rgb(20 209 204)'}} >
              Winson Herry
            </Typography>
                <Typography variant="caption" >
             California
            </Typography>
            </Box>
            </Box>   
           

          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Testimonial;
