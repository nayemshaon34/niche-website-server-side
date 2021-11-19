import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import useAuth from '../../Hooks/useAuth';

const DashboardHome = () => {
    const {user,token} = useAuth();
    const [orders, setOrders] = useState([])

    useEffect(() => {
        const url = ` https://frozen-tundra-38918.herokuapp.com/orders?email=${user.email}`
        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user.email, token])
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
                <h1 className="text-center text-Secondary
">DASHBOARD</h1>
                <h2 className="text-center my-3 text-success text-uppercase">Welcome  {user.displayName}</h2>
                <h3 className="text-center mt-5 text-success">Total Order Items: {orders.length}</h3>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;