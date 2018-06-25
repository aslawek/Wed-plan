import React from 'react';

import Header from './Header';
import Guest from './Guest';
import GuestsForm from './GuestsForm';

class Guests extends React.Component {

    render(){
        return (
            <div className="app-body">
                <Header searchBox backBtn/>
                <div className="guests-content">
                    <ul className="guests-box">
                        <li className="guest-item">
                            <div className="guest-name">Name</div>
                            <div className="guest-name">Surname</div>
                        </li>
                        {this.props.guests.map(guest => <Guest props={guest} key={guest.id}/>)}
                    </ul>
                    <GuestsForm/>
                </div>
            </div>
        )
    }
}

export default Guests;