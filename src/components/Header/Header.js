import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Header = () => {
    const { user, logOut } = useAuth()
    return (

        <>
            <Navbar bg="warning" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand className="text-black">Friends Travel Agency</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end ">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>

                        <Nav.Link as={Link} to="/myOrders">My Orders</Nav.Link>
                        <Nav.Link as={Link} to="/manageAllOrders">Manage All Orders</Nav.Link>
                        <Nav.Link as={Link} to="/addNewService">Add A New Service</Nav.Link>

                        {user?.email ?
                            <Button onClick={logOut} variant="primary">Logout </Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                        <Navbar.Text className="text-black">
                            <h4>{user.displayName}</h4>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>

    );
};

export default Header;