import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const NavigationNav = () => {

    const {user} = useContext(AuthContext);

    return (
        <div>
            <div className="navigation-area pb-5">
                <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
                    <Container>
                
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Link to="/">Home</Link>
                            <Link to="/">About</Link>
                            <Link to="/">Contact</Link>

                        </Nav>
                        <Nav className='align-items-center'>
                        {
                                user ? 
                                <>
                                    <FaUserCircle style={{fontSize: '2rem', marginRight: '10px'}}/>
                                    <Button variant="secondary">Logout</Button>
                                </> :
                                <>
                                    <Link to="/login">
                                        <Button variant="secondary">Sign In</Button>
                                    </Link>
                                </>
                        }
                            
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default NavigationNav;