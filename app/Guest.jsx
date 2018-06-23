import React from 'react';

const Guest = (props) => (
    <div className="guest-box">
        <div className="guest-name">{props.props.name}</div>
        <div className="guest-name">{props.props.surname}</div>
    </div>
);

export default Guest;