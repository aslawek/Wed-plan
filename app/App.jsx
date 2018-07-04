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
        userid: PropTypes.string,
        guests: PropTypes.object
    };

    state = {
        userid: null,
        owner: null,
        guests: {}
    };

    componentDidMount(){
        firebase.auth().onAuthStateChanged( user => {
            if (user) {
                this.authHandler({user});
            }
        })
    }

    addGuest = guest => {
        const guests = {...this.state.guests};
        guests[`guest${Date.now()}`] = guest;
        this.setState({guests});
    };

    editGuest = (guest, editedGuest) => {
        const guests = {...this.state.guests};
        guests[guest] = editedGuest;
        this.setState({guests})
    };

    generateGuest = guest => {
        const guests = {...this.state.guests};
        guests[`guest${Date.now()}`] = guest;
        this.setState({guests});
    };

    removeGuest = guestID => {
        const guests = {...this.state.guests};
        guests[guestID] = null;
        this.setState({guests});
    };

    // UNQUOTE LATER
    authHandler = async authData => {
    // authHandler = () => {

        // const authData = {
        //     user: {
        //         uid: "HJP9zCDULeN7mk4VPoku2izVVpq2"
        //     }
        // };

        this.setState({
            userid: authData.user.uid
        });

        const base = await database.fetch(this.state.userid, {context: this});

        this.setState({
            owner: base.owner || authData.user.uid
        });

        if (!base.owner) {
            await database.post(`/database${authData.user.uid}/owner`, {
                data: authData.user.uid
            });
        }

        this.ref = await database.syncState(`/database${authData.user.uid}/guests`, {
        // this.ref = database.syncState(`/database${authData.user.uid}/guests`, {
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

    logout = async () => {
        await firebase.auth().signOut();
        this.setState({userid: null});
    };

    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={() => <Mainpage props={data} authenticate={this.authenticate}/>}/>
                    <Route exact path="/guests" component={() =>
                        <Guests
                            userid={this.state.userid}
                            owner={this.state.owner}
                            guests={this.state.guests}
                            authenticate={this.authenticate}
                            logout={this.logout}
                            addGuest={this.addGuest}
                            editGuest={this.editGuest}
                            generateGuest={this.generateGuest}
                            removeGuest={this.removeGuest}
                        />
                    }/>
                </Switch>
            </BrowserRouter>
        )
    }
}

render(<App />, document.getElementById('app'));