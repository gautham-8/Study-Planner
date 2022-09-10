import React from 'react';
import {Nav, Navbar} from 'react-bootstrap'
import {Route,Routes,NavLink} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {clearLoginStatus} from "../Slices/userSlice";
import {useNavigate,Navigate} from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux";
import ViewAllRooms from './Rooms/ViewAllRooms'
import CreateRoom from './Rooms/CreateRoom'

function Navbar2() {
    let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector(
        (state) => state.user
    );
    let navigate = useNavigate();
    let dispatch = useDispatch();
    const userLogout = () => {
        localStorage.clear();
        dispatch(clearLoginStatus());
        navigate("/login");
    };
    return <div>
        <Navbar expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>
                Study Planner
            </Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="me-auto">
                    <NavLink className="active nav-link" to="/">View rooms</NavLink>
                    <NavLink className="active nav-link" to="/create-room">Create a room</NavLink>
                </Nav>
                <Nav className="mr-5">
                    <NavDropdown title={userObj.email} id="">
                        <NavDropdown.Item onClick={userLogout} className="">
                        Logout
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Routes>
            <Route path='/' element={<ViewAllRooms />} />
            <Route path='/create-room' element={<CreateRoom />} />
            {/* <Route path='/login' element={<Login />} />
            <Route path='/Signup' element={<Signup />} /> */}
        </Routes>
    </div>;
}

export default Navbar2;