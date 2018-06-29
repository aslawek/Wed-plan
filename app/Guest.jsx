import React from 'react';
import PropTypes from 'prop-types';

const Guest = (props) => (
    <li className="guest-item">
        <div className="guest-name">{props.props.name}</div>
        <div className="guest-name">{props.props.surname}</div>
    </li>
);

Guest.propTypes = {
    props: PropTypes.object
};

export default Guest;