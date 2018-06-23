import React from 'react';

import Guest from './Guest';

class Guests extends React.Component {

    render(){
        return (
            <div className="guests-box">
                {this.props.guests.map(guest => <Guest props={guest} key={guest.id}/>)}
            </div>
        )
    }
}

export default Guests;