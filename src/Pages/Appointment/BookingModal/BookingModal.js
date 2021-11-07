import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const BookingModal = ({open, handleClose, Booking, date}) => {
    const {name, time, space}=Booking;
    const handlebookingsubmit=(e)=>{
        e.preventDefault();
        alert("success")
        handleClose();

    }
    
    return (
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <form onSubmit={handlebookingsubmit}>
          <TextField
          disabled
          sx={{m:1, width:"90%"}}
          id="outlined-size-small"
          defaultValue={time}
          size="small"
        />
          <TextField
          sx={{m:1, width:"90%"}}
          id="outlined-size-small"
          defaultValue="Full Name"
          size="small"
        />
          <TextField
          sx={{m:1, width:"90%"}}
          id="outlined-size-small"
          defaultValue="Email"
          size="small"
        />
          <TextField
          sx={{m:1, width:"90%"}}
          id="outlined-size-small"
          defaultValue="Phone"
          size="small"
        />
          <TextField
          disabled
          sx={{m:1, width:"90%"}}
          id="outlined-size-small"
          defaultValue={date.toDateString()}
          size="small"
        />
       
       <Button type="submit"
            sx={{ mt: 4, py: 2, backgroundColor: '#1ac6ff' }}
            variant="contained"
          >
            Send
          </Button>

          </form>
         
        </Box>
      </Modal>
    );
};

export default BookingModal;