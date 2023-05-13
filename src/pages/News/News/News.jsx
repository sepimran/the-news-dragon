import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInside from '../EditorsInside/EditorsInside';

const News = () => {
    const news = useLoaderData();
    const {title ,image_url ,author,details ,_id , rating,total_view , id ,category_id} = news ;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="primary">All news in this category</Button></Link>
                    
                </Card.Body>
            </Card>

            <div className="editors-inside-area mt-4">
                <EditorsInside></EditorsInside>
            </div>
        </div>
    );
};

export default News;