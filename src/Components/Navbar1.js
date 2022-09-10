import React from 'react';
import {Nav, Navbar,NavDropdown,Container} from 'react-bootstrap'
import {Route,Routes,NavLink} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import { FaUserCircle } from "react-icons/fa";

function Navbar1() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="md">
                <Navbar.Brand className=''>
                    Study Planner
                </Navbar.Brand>

                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        {/* <NavLink className="active nav-link" to="/">Home</NavLink>  */}
                    </Nav>
                    <Nav className="">
                        <NavLink className="active nav-link" to="/Login"> <FaUserCircle/> Login/Signup</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/login' element={<Login />} />
                <Route path='/Signup' element={<Signup />} />
            </Routes>
        </div>
    );
}

export default Navbar1;
