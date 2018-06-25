import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';

const Mainpage = (props) => (
    <div className="app-body">
        <Header/>
        <div className="mainpage-box">
            <Link to='/guests' className="mainpage-elem">Guests</Link>
            <Link to='/budget' className="mainpage-elem">Budget</Link>
            <Link to='/tasks' className="mainpage-elem">Tasks</Link>
            <Link to='/calendar' className="mainpage-elem">Calendar</Link>
        </div>
    </div>
);

export default Mainpage;
