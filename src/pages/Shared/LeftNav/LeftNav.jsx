import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeInsideEditor from '../../Home/HomeInsideEditor/HomeInsideEditor';

const LeftNav = () => {
    const [categories , setCategories] = useState([]);

    useEffect( () => {
        fetch('https://the-news-dragon-client-server-sepimran.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error =>{
                console.log(error)
            })
    } )

    return (
        <div>
            <h4 className='mb-3'>All Categories</h4>
            {
                categories.map(category => <p key={category.id}>
                    <Link to={`/category/${category.id}`} className='text-decoration-none text-dark'>{category.name}</Link>
                </p>)
            }

            <HomeInsideEditor></HomeInsideEditor>
            
        </div>
    );
};

export default LeftNav;