import { Grid, Typography } from '@mui/material';
import React from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import BookingModal from './../../BookingModal/BookingModal';

const Booking = (props) => {
  const { name, time, space } =props.Booking;
  const {date}=props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ p: 5 }}>
          <Typography
            sx={{ color: '#1ac6ff' }}
            variant="h5"
            gutterBottom
            component="div"
          >
            {name}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            {time}
          </Typography>
          <Typography variant="caption" display="block" component="div">
            {space} SPACES AVAILABLE
          </Typography>
          <Button onClick={handleOpen}
            sx={{ mt: 4, py: 2, backgroundColor: '#1ac6ff' }}
            variant="contained"
          >
            BOOK APPOINTMENT
          </Button>
        </Paper>
      </Grid>
      <BookingModal date={date} Booking={props.Booking} open={open} handleClose={handleClose}></BookingModal>
    </>
  );
};

export default Booking;
