import React from 'react';
import { Link } from 'react-router-dom';

const Mainpage = () => (
    <div className="mainpage-box">
        <Link to='/guests' className="mainpage-btn">Guests</Link>
    </div>
);

export default Mainpage;
