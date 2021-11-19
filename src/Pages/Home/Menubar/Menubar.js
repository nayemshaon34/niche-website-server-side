import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Menubar.css';

const Menubar = () => {
    const {user,handleLogout} = useAuth();
    return (
        <div>
            

<Navbar bg="dark" expand="lg">
  <Container className="p-xl-1">
  <Navbar.Brand>
  <h4 className="header-color my-auto">Holiday Hype</h4>
  </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto mx-lg-auto ">
      <div className="container-fluid ">
                    {/* btn deleted */}
                    <div className="collapse navbar-collapse d-flex justify-content-around" id="navbarSupportedContent ">
                        <ul className=" navbar-nav me-auto mx-lg-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="text-decoration-none me-5 color" to="/home" activeStyle={{fontWeight: "bold",color: "red"}}>Home</NavLink>
                            </li>
                            
                            <li className="nav-item">
                                <NavLink className="text-decoration-none me-5 color" to="/tours" activeStyle={{fontWeight: "bold",color: "red"}}>Tours</NavLink>
                            </li>
                            {
                                user.email&&<li className="nav-item">
                                <NavLink className="text-decoration-none me-5 color"to="/myOrder" activeStyle={{fontWeight: "bold",color: "red"}}>Your Order</NavLink>
                            </li>
                            }
                            {
                                user.email &&<li className="nav-item">
                                <NavLink className="text-decoration-none me-5 color" to="/manageOrders" activeStyle={{fontWeight: "bold",color: "red"}}>Manage Orders</NavLink>
                            </li>
                            }

                            {
                                user.email&&<li className="nav-item">
                                <NavLink className="text-decoration-none me-5 color" to="/addService" activeStyle={{fontWeight: "bold",color: "red"}}>Add Service</NavLink>
                            </li>
                            }

                            <li>
                            {user.email && <span style={{ color: 'white' }}>Hello {user.displayName} </span>}
                            </li>
                            {
                                user.email?<li>
                                    <button className="btn btn-danger ms-0 btn-sm ms-lg-4" onClick={handleLogout}>Sign Out</button>
                                </li>
                            :
                                <li className="nav-item">
                                    <NavLink className="text-decoration-none me-5 color" to="/login"        activeStyle={{fontWeight: "bold",color: "red"}}>Login</NavLink>
                                </li>
                            
                            }
      </ul>
    </div>
  </div>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>





        </div>
    );
};

export default Menubar;