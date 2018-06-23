import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import data from './../data.json';
import Mainpage from './Mainpage';
import Guests from './Guests';

const App = () => (
    <BrowserRouter>
        <div className="app-body">
            <Switch>
                <Route exact path="/" component={Mainpage}/>
                <Route exact path="/guests" component={(props) => <Guests guests={data.guests}/> }/>
            </Switch>
        </div>
    </BrowserRouter>
);

render(<App />, document.getElementById('app'));