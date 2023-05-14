import React from 'react';
import News from '../../News/News/News';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import moment from 'moment/moment';
import { FaEye, FaRegBookmark, FaRegStar, FaRegStarHalf, FaShareAlt, FaStar  } from 'react-icons/fa';
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating'


const NewsCard = ({news}) => {
const {title ,image_url ,author,details ,_id , rating,total_view} = news ;
  
    return (
        <Card className=" mb-4">
            <Card.Header className='d-flex align-items-center'>
                <div className="author-details flex-grow-1">
                    <h4>{author?.name}</h4>
                    <p>{moment(author.published_date).format('YYYY-MM-DD')}</p>
                    <img src={author?.img} alt="" />
                </div>
                <div>
                    <FaRegBookmark />
                    <FaShareAlt/>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img src={image_url} alt="Card image" />
                <Card.Text>
                    {details.length  < 250 ? <>{details}</> : <>
                    {details.slice(0, 250)}...
                    <><Link to={`/news/${_id}`}>read More</Link> </>
                    </> }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex align-items-center">
                <div className='d-flex flex-grow-1 align-items-center'>
                    <Rating style={{ maxWidth: 150 }} value={rating} readOnly></Rating>
                    {rating?.number}
                </div>
                <div>
                    <FaEye className='me-2'/>
                        {total_view ? total_view : <>01</>}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;