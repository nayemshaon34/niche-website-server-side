import { Alert } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Footer from '../../Footer/Footer';
import Menubar from '../../Home/Menubar/Menubar';
import Item from '../Item/Item';
// import './Services.css'

const Items = () => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
        const [items,setItems] = useState([]);
        useEffect(()=>{
            fetch(' https://frozen-tundra-38918.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setItems(data))
        },[])
        
        
        console.log(items);
    return (
        <div>
            <Menubar></Menubar>
            <div className="card-contain mb-5">
        {
            items.length===0? <div className="text-center mt-3"><Spinner animation="border" /></div>:<h1 className="text-center text-success mt-5">Our Packages</h1>
        }

{bookingSuccess && <Alert severity="success">Appointment Booked successfully!</Alert>}
                <div className="container">
                <div className="card-contanier">
                <div class="row row-cols-1 row-cols-md-3 g-4 mt-lg-5 mt-1">
                      {
                          items.map(item => <Item
                            item={item}
                            setBookingSuccess={setBookingSuccess}
                            key={item._id}
                            ></Item>)
                      }      
                </div>
            </div> 
                </div>
                    
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Items;