import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
    return (
        <div>
            <h1>404 ERROR</h1>
            <h3>Page Not Found</h3>
            <Link to="/" >Go Back Home</Link>
        </div>
    )
}

export default PageNotFound;