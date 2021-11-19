import * as React from 'react';
import './Dashboard.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import useAuth from '../../Hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Payment from '../Payment/Payment';
import DashboardHome from '../DashboardHome/DashboardHome';
import Order from '../../Items/Order/Order';
import Review from '../../Home/Reviews/Review/Review';
import ManageOrder from '../ManageOrder/ManageOrder';

const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin,logout } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
       <div>
           <Toolbar class/>
            <Divider />
            <div className="mt-5">
            
            <Link className="dashboard" to="/home"><Button color="inherit">Home</Button></Link>
            <br />
            <Link className="dashboard" to={`${url}`}><Button color="inherit">Dashboard</Button></Link>
            <br />
            <Link className="dashboard" to={`${url}/order`}><Button color="inherit">My Order</Button></Link>
            <br />
            <Link className="dashboard" to={`${url}/review`}><Button color="inherit">Review</Button></Link>
            <br />
            <Link className="dashboard" to={`${url}/payment`}><Button color="inherit">Payment</Button></Link>
            <br />
            
            {admin && <Box>
                <Link className="dashboard" to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
                <br />
                <Link className="dashboard" to={`${url}/manageOrder`}><Button color="inherit">Manage Order</Button></Link>
                <br />
                <Link className="dashboard" to={`${url}/addProduct`}><Button color="inherit">Add Product</Button></Link>
                <br />
            </Box>}
            <Link className="dashboard text-danger" to="/home"><Button color="inherit" onClick={logout}>Log Out</Button></Link>
            
        </div>
       </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        
        <div>
            <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
               
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/order`}>
                        <Order></Order>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageOrder`}>
                    <ManageOrder></ManageOrder>
                    </AdminRoute>
                    <Route path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </Route>
                </Switch>

            </Box>
        </Box>
        </div>
    );
}


export default Dashboard;