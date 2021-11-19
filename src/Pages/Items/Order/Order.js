import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const Order = (id) => {
    const [orders, setOrders] = useState([])
    const {user,token} = useAuth();
    const handleDelete = () =>{
            fetch( ` https://frozen-tundra-38918.herokuapp.com/orders?email=${id}`,{
                method: 'DELETE',
            })
            
    }

    const payAlert = () =>{
        alert("Payment Method is Coming Soon");
    }
    
 
    useEffect(() => {
        const url = ` https://frozen-tundra-38918.herokuapp.com/orders?email=${user.email}`
        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data));
            console.log(orders);
    }, [user.email, token])
    return (
        <div>
            <h4 className="text-center">Name: <span className="text-uppercase text-primary">{user.displayName}</span></h4>
            <h4 className="text-center">Email:  <span className="text-primary">{user.email}</span></h4>
            <h5 className="text-center text-success mt-4">Total Orders: {orders.length}</h5>

            {
                          orders.map(order => 
                            <div class="row row-cols-1 row-cols-md-3 g-4">
                            <div class="col">
                              <div class="card h-100">
                                <div class="card-body">
                                  <h5 class="card-title text-center">{order?.productName}</h5>
                                  
                                </div>
                                <div className="d-flex justify-content-evenly mb-2">
                                <button onClick={()=>handleDelete(order._id)} className="btn btn-danger mb-2 btn-sm">Delete</button>
                                <button onClick={payAlert} className="btn btn-warning mb-2 btn-sm">Pay</button>
                                </div>
                              </div>
                            </div>
                            
                          </div>
                            )
                      }
        </div>
    );
};

export default Order;