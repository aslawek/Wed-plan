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
        editGuest: PropTypes.func,
        generateGuest: PropTypes.func,
        removeGuest: PropTypes.func,
        authenticate: PropTypes.func
    };

    render(){
        const logout = <button onClick={this.props.logout}>Logout!</button>
        if(!this.props.guests ){
            return (
                <div className="app-body">
                    <Header searchBox backBtn/>
                    <h1>Loading</h1>
                </div>
            )
        }
        if (!this.props.userid){
            return (
                <div className="app-body">
                    <Header searchBox backBtn/>
                    <h1>You are not logged in.</h1>
                    <Login authenticate={this.props.authenticate}/>
                </div>
            )
        }
        if (this.props.userid !== this.props.owner){
            return <div>
                <h1>Sorry, you are not the owner of the data</h1>
                {logout}
            </div>
        }
        return (
            <div className="app-body">
                <Header searchBox backBtn/>
                {logout}
                <div className="guests-content">
                    <ul className="guests-box">
                        <li className="guest-item">
                            <div className="guest-field-id">No.</div>
                            <div className="guest-field-names">Name</div>
                            <div className="guest-field-names">Surname</div>
                            <div className="guest-field-narrow">+1</div>
                            <div className="guest-field-narrow">Age</div>
                            <div className="guest-field-narrow">Side</div>
                            <div className="guest-field-narrow">Family</div>
                            <div className="guest-field-names">Status</div>
                            <div className="guest-field-narrow">Hotel</div>
                            <div className="guest-field-wide">Note:</div>
                            <div className="guest-field-narrow">Date:</div>
                            <div className="guest-field-btn">Edit</div>
                            <div className="guest-field-btn">&times;</div>
                        </li>
                        {Object.keys(this.props.guests)
                        .map((e, i) => <Guest
                            editGuest={this.props.editGuest}
                            removeGuest={this.props.removeGuest}
                            guest={this.props.guests[e]}
                            key={e}
                            id={e}
                            index={i+1}
                        />)}
                    </ul>
                    <GuestsForm addGuest={this.props.addGuest} generateGuest={this.props.generateGuest}/>
                </div>
            </div>
        )
    }
}

export default Guests;