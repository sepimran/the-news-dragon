import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import image1 from '../../../assets/1.png'
import image2 from '../../../assets/2.png'
import image3 from '../../../assets/3.png'
import { FaCalendarAlt } from 'react-icons/fa';

const EditorsInside = () => {
    return (
        <CardGroup className='gap-3'>
            <Card className='border-0'>
                <Card.Img variant="top" src={image1} />
                <Card.Body className='px-0'>
                    <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                    <Card.Text>
                        21 The Most Stylish Wedding Guest Dresses For Spring
                    </Card.Text>
                    <div className="date">
                        <FaCalendarAlt/> Jan 4, 2022
                    </div>
                </Card.Body>
            </Card>

            <Card className='border-0'>
                <Card.Img variant="top" src={image2} />
                <Card.Body className='px-0'>
                    <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                    <Card.Text>
                        21 The Most Stylish Wedding Guest Dresses For Spring
                    </Card.Text>
                    <div className="date">
                        <FaCalendarAlt/> Jan 4, 2022
                    </div>
                </Card.Body>
            </Card>

            <Card className='border-0'>
                <Card.Img variant="top" src={image3} />
                <Card.Body className='px-0'>
                    <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                    <Card.Text>
                        21 The Most Stylish Wedding Guest Dresses For Spring
                    </Card.Text>
                    <div className="date">
                        <FaCalendarAlt/> Jan 4, 2022
                    </div>
                </Card.Body>
            </Card>
        </CardGroup>
    );
};

export default EditorsInside;