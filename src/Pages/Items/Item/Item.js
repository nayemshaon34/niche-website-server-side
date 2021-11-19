import React from 'react';
// import './Service.css';
import Booking from '../Booking/Booking';

const Item = ({item,setBookingSuccess}) => {
    const {name,image,description,price} = item;
    
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (
        <>
        <div className="col card-contain">
        <div className="card">
            <img src={image} className="card-img-top img-fluid w-50 mx-auto" alt="..."/>
                <div className="card-body  cart">
                     <div className="course-info d-flex justify-content-around my-3">
                        <h4 className="card-title text-4xl">{name}</h4>
                     </div>
                     <h6 className="mb-3 text-center text-primary"><small>Price: £{price} </small></h6>
                     <div className="d-flex justify-content-around my-2">
                     </div>
                     <div className="description">
                         {description}
                     </div>
                     <div className="container d-flex justify-content-around mt-4 mb-3">
                     <button onClick={handleBookingOpen} className="btn btn-outline-success">Buy Now</button>
                     </div>
                </div>
         </div>
    </div>
    <Booking
    item={item}
    openBooking={openBooking}
    handleBookingClose={handleBookingClose}
    setBookingSuccess={setBookingSuccess}
    ></Booking>
    </>
    );
};

export default Item;