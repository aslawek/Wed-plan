import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import data from './../data.json';
import database from '../database';
import Mainpage from './Mainpage';
import Guests from './Guests';

class App extends React.Component {
    state = {
        guests: {}
    };

    componentDidMount(){
        this.ref = database.syncState('/database/guests', {
            context: this,
            state: 'guests'
        });
    }

    addGuest = guest => {
        const guests = {...this.state.guests};
        guests[`guest${Date.now()}`] = guest;
        this.setState({guests});
    };

    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={() => <Mainpage props={data}/>}/>
                    <Route exact path="/guests" component={() =>
                        <Guests
                        guests={data.guests}
                        addGuest={this.addGuest}
                        />
                    }/>
                </Switch>
            </BrowserRouter>
        )
    }
}

render(<App />, document.getElementById('app'));