import "babel-polyfill";
import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import firebase from 'firebase';

import database, { firebaseApp } from "../database";
import data from './../data.json';
import Mainpage from './Mainpage';
import Guests from './Guests';

class App extends React.Component {
    static propTypes = {
        guests: PropTypes.object
    };

    state = {
        // change uuk for null or {}
        userid: "",
        guests: {
            id: 1,
            name: "Rafał"
        }
    };

    componentDidMount(){
        // this.ref = database.syncState('/database/guests', {
        //     context: this,
        //     state: 'guests'
        // });
    }

    addGuest = guest => {
        const guests = {...this.state.guests};
        guests[`guest${Date.now()}`] = guest;
        this.setState({guests});
    };

    authHandler = async authData => {
        // setState i poł. z firebase śmiga
        this.setState({userid: authData.user.uid});
        // const currentUser = await database.fetch(this.state.userid, {context: this});

        this.ref = await database.syncState(`/database${authData.user.uid}/guests`, {
            context: this,
            state: 'guests'
        });
    };

    authenticate = provider => {
        const authProvider = new firebase.auth[`${provider}AuthProvider`]();
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
                        guests={this.state.guests}
                        addGuest={this.addGuest}
                        />
                    }/>
                </Switch>
            </BrowserRouter>
        )
    }
}

render(<App />, document.getElementById('app'));