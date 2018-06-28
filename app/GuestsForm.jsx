import React from 'react';
import PropTypes from 'prop-types';

class GuestsForm extends React.Component {
    static propTypes = {
        addGuest: PropTypes.func
    };
    nameRef = React.createRef();
    surnameRef = React.createRef();
    ageRef = React.createRef();
    ageCategoryRef = React.createRef();
    companionRef = React.createRef;
    sideRef = React.createRef();
    familyRef = React.createRef();
    confirmedRef = React.createRef();
    accomodationRef = React.createRef();

    addGuest = (event) => {
        event.preventDefault();
        const guest = {
            name: this.nameRef.current.value,
            surname: this.surnameRef.current.value
        };
        this.props.addGuest(guest);
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
                <input
                    name="age"
                    ref={this.ageRef}
                    className="guest-form-input__small"
                    type="number"
                    placeholder="Provide age or select"
                />
                <select name="age category" ref={this.ageCategoryRef} className="guest-form-select" type="text" defaultValue="">
                    <option value="">Age category</option>
                    <option value="baby">0-5</option>
                    <option value="child">5-10</option>
                    <option value="teenager1">10-15</option>
                    <option value="teenager2">10-18</option>
                    <option value="young">18-30</option>
                    <option value="mature">30-50</option>
                    <option value="old">50-</option>
                </select>
                <select name="companion" ref={this.companionRef} className="guest-form-select" type="text" defaultValue="">
                    <option value="" disabled>Companion</option>
                    <option value={false}>yes</option>
                    <option value={true}>no</option>
                </select>
                <select name="side" ref={this.sideRef} className="guest-form-select" type="text" defaultValue="">
                    <option value="" disabled>Side (broom/bride)</option>
                    <option value="none">both</option>
                    <option value="groom">groom</option>
                    <option value="bride">bride</option>
                </select>
                <button className="guest-form-btn" type="submit">Add guest</button>
            </form>
        )
    }
}

export default GuestsForm;