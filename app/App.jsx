import React from 'react';
import { render } from 'react-dom';

const App = () => (
    <h1 className="hello">Hello!</h1>
);

render(<App />, document.getElementById('app'));