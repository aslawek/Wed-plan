import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import data from './../data.json';
import Mainpage from './Mainpage';
import Guests from './Guests';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <Mainpage props={data}/>}/>
            <Route exact path="/guests" component={() => <Guests guests={data.guests}/> }/>
        </Switch>
    </BrowserRouter>
);

render(<App />, document.getElementById('app'));