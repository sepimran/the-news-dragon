import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle ,FaGithub ,FaFacebook ,FaTwitter , FaInstagram  } from 'react-icons/fa';
import QZone from '../QZone/QZone';

const RightNav = () => {
    return (
        <sidebar className="sidebar-area">
            <div className="single-sidebar-item mb-4">
                <h4 className='mb-3'>Login With</h4>
                <Button className='d-block w-100 border mb-2 border-primary text-primary' variant="light"> <FaGoogle /> Primary</Button>
                <Button variant="d-block w-100 border border-dark text-dark"><FaGithub /> Secondary</Button>
            </div>

            <div className="single-sidebar-item mb-4">
                <h4 className='mb-3'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item> <FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter />Twitter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>

            <div className="single-sidebar-item">
                <QZone></QZone>
            </div>
        </sidebar>
    );
};

export default RightNav;