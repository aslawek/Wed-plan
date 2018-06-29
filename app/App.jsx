import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import firebase from 'firebase';

import { firebaseApp } from "../database";
import data from './../data.json';
import database from '../database';
import Mainpage from './Mainpage';
import Guests from './Guests';

class App extends React.Component {
    state = {
        userid: {},
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

    authHandler = async (authData) => {
        console.log(authData);
    };

    authenticate = provider => {
        const authProvider = new firebase.auth[`${Provider}AuthProvider`]();
        firebaseApp
            .auth()
            .signInWithPopup(authProvider)
            .then(this.authHandler)
    };

    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={() => <Mainpage props={data} authenticate={this.authenticate}/>}/>
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