import React from 'react';
import { Container, Grid } from '@mui/material';
import Booking from './Booking/Booking'
import { Typography } from '@mui/material';

const AvailableAppointments = (props) => {
  // database
  const timeSlots = [
    {
      id: '1',
      name: 'Teeth Orthodontics',
      time: '8:00 - 9.00 AM',
      space: '10',
    },
    {
      id: '2',
      name: 'Cosmetics Dentistry',
      time: '11:00 - 11.00 AM',
      space: '10',
    },
    {
      id: '3',
      name: 'Teeth Cleaning',
      time: '5:00 - 8.00 AM',
      space: '10',
    },
    {
      id: '4',
      name: 'Cavity Protection',
      time: '7:00 - 8.00 AM',
      space: '10',
    },
    {
      id: '5',
      name: 'Teeth Orthodontics',
      time: '8:00 - 9.00 AM',
      space: '10',
    },
    {
      id: '6',
      name: 'Teth Orthodontics',
      time: '8:00 - 9.00 AM',
      space: '10',
    },
  ];

  const { date } = props;
  return (
    <Container>
      <Typography variant="h4"  sx={{color:"#1ac6ff",mb:4, fontWeight:600}}>Available Appointment {date.toDateString()}</Typography>

      <Grid container spacing={2}>
          {
              timeSlots.map(timeslot =>
                 <Booking date={date} Booking={timeslot}></Booking>
            )
          }
      </Grid>
    </Container>
  );
};

export default AvailableAppointments;
