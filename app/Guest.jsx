import React from 'react';

const Guest = (props) => (
    <li className="guest-item">
        <div className="guest-name">{props.props.name}</div>
        <div className="guest-name">{props.props.surname}</div>
    </li>
);

export default Guest;