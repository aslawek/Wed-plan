import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Guest from './Guest';
import GuestsForm from './GuestsForm';
import Login from './Login';

class Guests extends React.Component {
    static propTypes = {
        guests: PropTypes.object,
        userid: PropTypes.string,
        addGuest: PropTypes.func,
        generateGuest: PropTypes.func,
        removeGuest: PropTypes.func,
        authenticate: PropTypes.func
    };

    render(){
        if(!this.props.guests ){
            return (
                <div className="app-body">
                    <Header searchBox backBtn/>
                    <h1>Loading</h1>
                </div>
            )
        }
        if (this.props.userid === ""){
            return (
                <div className="app-body">
                    <Header searchBox backBtn/>
                    <h1>You are not logged in.</h1>
                    <Login authenticate={this.props.authenticate}/>
                </div>
            )
        }
        return (
            <div className="app-body">
                <Header searchBox backBtn/>
                <div className="guests-content">
                    <ul className="guests-box">
                        <li className="guest-item">
                            <div className="guest-field-wide">Name</div>
                            <div className="guest-field-wide">Surname</div>
                            <div className="guest-field-narrow">+1</div>
                            <div className="guest-field-narrow">Age</div>
                            <div className="guest-field-narrow">Side</div>
                            <div className="guest-field-narrow">Family</div>
                            <div className="guest-field-narrow">Status</div>
                            <div className="guest-field-narrow">Hotel</div>
                            <div className="guest-field-wide">Note:</div>
                            <div className="guest-field-btn">Edit</div>
                            <div className="guest-field-btn">&times;</div>
                        </li>
                        {Object.keys(this.props.guests).map(e => <Guest removeGuest={this.props.removeGuest} guest={this.props.guests[e]} key={e} id={e}/>)}
                    </ul>
                    <GuestsForm addGuest={this.props.addGuest} generateGuest={this.props.generateGuest}/>
                </div>
            </div>
        )
    }
}

export default Guests;