import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>This page not available</h1>
            <h2>404</h2>
            <Link className='link' to="home">Back to home page</Link>
        </div>
    );
};

export default NotFound;