import React from 'react';
import PropTypes from 'prop-types';

const Guest = (props) => (
    <li className="guest-item">
        <div className="guest-field-id">{props.index}</div>
        <div className="guest-field-names">{props.guest.name}</div>
        <div className="guest-field-names">{props.guest.surname}</div>
        <div className="guest-field-narrow">{props.guest.companion}</div>
        <div className="guest-field-narrow">{props.guest.ageCategory}</div>
        <div className="guest-field-narrow">{props.guest.side}</div>
        <div className="guest-field-narrow">{props.guest.family}</div>
        <div className="guest-field-names">{props.guest.status}</div>
        <div className="guest-field-narrow">{props.guest.hotel}</div>
        <div className="guest-field-wide">{props.guest.note}</div>
        <div className="guest-field-narrow">{props.guest.date}</div>
        <button className="guest-field-btn" onClick={() => props.editGuest(props.guest)}>edit</button>
        <button className="guest-field-btn" onClick={() => props.removeGuest(props.id)}>&times;</button>
    </li>
);

Guest.propTypes = {
    index: PropTypes.number,
    guest: PropTypes.object,
    removeGuest: PropTypes.func
};

export default Guest;