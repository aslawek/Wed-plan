import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Guest from './Guest';
import GuestsForm from './GuestsForm';

class Guests extends React.Component {
    static propTypes = {
        guests: PropTypes.object,
        addGuest: PropTypes.func
    };

    render(){
        console.log(this.props.guests);
        if(!this.props.guests){
            return <div>Loading</div>
        }
        return (
            <div className="app-body">
                <Header searchBox backBtn/>
                <div className="guests-content">
                    <ul className="guests-box">
                        <li className="guest-item">
                            <div className="guest-name">Name</div>
                            <div className="guest-name">Surname</div>
                        </li>
                        {console.log(this.props.guests)}
                        {/*Object.keys*/}
                        {this.props.guests.map(guest => <Guest props={guest} key={guest.id}/>)}
                    </ul>
                    <GuestsForm addGuest={this.props.addGuest}/>
                </div>
            </div>
        )
    }
}

export default Guests;