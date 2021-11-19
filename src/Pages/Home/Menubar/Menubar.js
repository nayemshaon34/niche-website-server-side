import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Menubar.css';

const Menubar = () => {
    const {user,logout} = useAuth();
    return (
        <div>
            

<Navbar bg="dark" expand="lg">
  <Container className="p-xl-1">
  <Navbar.Brand>
  <NavLink to="/home" className="header-color my-auto color text-decoration-none fs-3">Camera World</NavLink>
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
                                <NavLink className="text-decoration-none me-5 color" to="/items" activeStyle={{fontWeight: "bold",color: "red"}}>Camera Items</NavLink>
                            </li>
                            
                            {
                                user.email &&<li className="nav-item">
                                <NavLink className="text-decoration-none me-5 color" to="/dashboard" activeStyle={{fontWeight: "bold",color: "red"}}>Dashboard</NavLink>
                            </li>
                            }


                            <li>
                            {user.email && <span style={{ color: 'white' }}>Hello {user.displayName} </span>}
                            </li>
                            {
                                user.email?<li>
                                    <button className="btn btn-danger ms-0 btn-sm ms-lg-4" onClick={logout}>Sign Out</button>
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