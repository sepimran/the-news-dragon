import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import image1 from '../../../assets/1.png';
import image2 from '../../../assets/2.png';
import image3 from '../../../assets/3.png';
import { FaCalendarAlt } from 'react-icons/fa';

const HomeInsideEditor = () => {
    return (
        <Row xs={1} md={1} lg={1}>
            <Col className='mb-4'>
                <Card>
                    <Card.Img variant="top" src={image1} />
                    <Card.Body>
                        <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                        <div>
                            <div>
                                Sports
                            </div>
                            <div className="date">
                                <FaCalendarAlt/> Jan 4, 2022
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>

            <Col className='mb-4'>
                <Card>
                    <Card.Img variant="top" src={image2} />
                    <Card.Body>
                        <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                        <div>
                            <div>
                                Sports
                            </div>
                            <div className="date">
                                <FaCalendarAlt/> Jan 4, 2022
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>

            <Col className='mb-4'>
                <Card>
                    <Card.Img variant="top" src={image3} />
                    <Card.Body>
                        <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                        <div>
                            <div>
                                Sports
                            </div>
                            <div className="date">
                                <FaCalendarAlt/> Jan 4, 2022
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default HomeInsideEditor;