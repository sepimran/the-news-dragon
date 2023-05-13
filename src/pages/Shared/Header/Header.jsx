import React, { memo } from 'react';
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';


const Header = memo(() => {    
    return (
        <header className='py-5 pb-3'>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="log-area text-center">
                            <Link to="/">
                                <img src={logo} alt="Dragon Line" />
                            </Link>
                            <p>Journalism Without Fear or Favour</p>
                            <h4>{moment().format("dddd, MMMM D, YYYY")}</h4>
                        </div>
                        <div className="lates-news-area d-flex bg-light p-3 mt-4">
                            <Button variant="danger">Latest</Button>
                            <Marquee speed={100}>
                                Lorem ipsum, dolor sit amet consectetur  eaque accusantium optio .... 
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus commodi eaque accusantium optio .... 
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus commodi eaque accusantium optio .... 

                            </Marquee>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    );
});

export default Header;