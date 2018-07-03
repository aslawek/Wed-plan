import React from 'react';
import PropTypes from 'prop-types';

import { randomizeGuest } from './helpers/randomizeGuest';

class GuestsForm extends React.Component {
    static propTypes = {
        addGuest: PropTypes.func,
        generateGuest: PropTypes.func
    };
    nameRef = React.createRef();
    surnameRef = React.createRef();
    ageCategoryRef = React.createRef();
    companionRef = React.createRef();
    sideRef = React.createRef();
    familyRef = React.createRef();
    statusRef = React.createRef();
    hotelRef = React.createRef();
    noteRef = React.createRef();

    addGuest = (event) => {
        event.preventDefault();
        const newGuest = {
            name: this.nameRef.current.value,
            surname: this.surnameRef.current.value,
            ageCategory: this.ageCategoryRef.current.value,
            companion: this.companionRef.current.value,
            side: this.sideRef.current.value,
            family: this.familyRef.current.value,
            status: this.statusRef.current.value,
            hotel: this.hotelRef.current.value,
            note: this.noteRef.current.value
        };
        this.props.addGuest(newGuest);
        event.currentTarget.reset();
    };

    render(){
        return(
            <form className="guest-form" onSubmit={this.addGuest}>
                <div className="guest-form-header">New guest</div>
                <input
                    name="name"
                    ref={this.nameRef}
                    className="guest-form-input"
                    placeholder="Name"
                    type="text"
                />
                <input
                    name="surname"
                    ref={this.surnameRef}
                    className="guest-form-input"
                    placeholder="Surname"
                    type="text"
                />
                <select name="age category" ref={this.ageCategoryRef} className="guest-form-select" type="text" defaultValue="">
                    <option value="" disabled>Age category</option>
                    <option value="0-5">0-5</option>
                    <option value="5-10">5-10</option>
                    <option value="10-15">10-15</option>
                    <option value="10-18">10-18</option>
                    <option value="18-30">18-30</option>
                    <option value="30-40">30-40</option>
                    <option value="30-40">40-50</option>
                    <option value="50+">50+</option>
                </select>
                <select name="companion" ref={this.companionRef} className="guest-form-select" type="text" defaultValue="">
                    <option value="" disabled>Companion</option>
                    <option value="yes">yes</option>
                    <option value="no">no</option>
                </select>
                <select name="side" ref={this.sideRef} className="guest-form-select" type="text" defaultValue="">
                    <option value="" disabled>Side (broom/bride)</option>
                    <option value="none">both</option>
                    <option value="groom">groom</option>
                    <option value="bride">bride</option>
                </select>
                <select name="family" ref={this.familyRef} className="guest-form-select" type="text" defaultValue="">
                    <option value="" disabled>Family (broom/bride)</option>
                    <option value="none">none</option>
                    <option value="groom">groom</option>
                    <option value="bride">bride</option>
                </select>
                <select name="status" ref={this.statusRef} className="guest-form-select" type="text" defaultValue="">
                    <option value="" disabled>Status</option>
                    <option value="none">None</option>
                    <option value="invited">Invited</option>
                    <option value="confirmed">Confirmed</option>
                </select>
                <select name="hotel" ref={this.hotelRef} className="guest-form-select" type="text" defaultValue="">
                    <option value="" disabled>Accomodation?</option>
                    <option value="yes">yes</option>
                    <option value="no">no</option>
                </select>
                <textarea
                    name="note"
                    ref={this.noteRef}
                    className="guest-form-input"
                    placeholder="Note"
                    type="text"
                />
                <button className="guest-form-btn" type="submit">Add guest</button>
                <button className="guest-form-btn" onClick={() => this.props.generateGuest(randomizeGuest())}>Generate guest</button>
            </form>
        )
    }
}

export default GuestsForm;