import React from 'react';

class GuestsForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {name: ''};

        this.handleChange = this.handleChange.bind(this);
        this.addGuest = this.addGuest.bind(this);
    }

    handleChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    addGuest = (event) => {
        event.preventDefault();
        console.log(this.state.name);
    };

    render(){
        return(
            <form className="guest-form" onSubmit={this.addGuest}>
                <div className="guest-form-header">New guest</div>
                <input value={this.state.name} onChange={this.handleChange} className="guest-form-input" placeholder="name" type="text"/>
                <input className="guest-form-input" placeholder="surname" type="text"/>
                <button className="guest-form-btn" type="submit">Add guest</button>
            </form>
        )
    }
}

export default GuestsForm;