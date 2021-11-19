import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';


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

const Booking = ({ openBooking, handleBookingClose, item, setBookingSuccess }) => {
    const { name} = item;
    const { user } = useAuth();
    const initialInfo = { name: user.displayName, email: user.email, phone: '',productId:item._id }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo);

    }

    const handleBookingSubmit = e => {
        // collect data
        const orderDetails = {
            ...bookingInfo,
            productName: name,
        }
        
        axios.post(' https://frozen-tundra-38918.herokuapp.com/orders',orderDetails)
        .then(res => {
          if(res.data.insertedId){
              alert("Ordered Succesfully");
              console.log(res);
              handleBookingClose();
          }
          console.log(res);
        })
        
        // // send to the server
        // fetch(' https://frozen-tundra-38918.herokuapp.com/allOrder', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(orderDetails)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.insertedId) {
        //             setBookingSuccess(true);
        //             handleBookingClose();
        //         }
        //     });
        e.preventDefault();
        console.log(orderDetails);

    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <form onSubmit={handleBookingSubmit}>
                        <TextField
                            placeholder="name"
                            onBlur={handleOnBlur}
                            name="name"
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={user.displayName}
                            size="small"
                            
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="address"
                            placeholder="Address"
                            onBlur={handleOnBlur}
                            required
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                        
                            id="outlined-size-small"
                            placeholder="Email"
                            name="email"
                            onBlur={handleOnBlur}
                            defaultValue={user.email}
                            size="small"
                            disabled
                        
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            placeholder="Phone Number"
                            name="phone"
                            onBlur={handleOnBlur}
                            size="small"
                            required
                        />
                        <Button type="submit" variant="contained">Submit</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default Booking;