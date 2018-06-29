import React from 'react';

const Login = (props) => (
    <div className="login-box">
        <p className="login-p">Sign in to manage your wedding!</p>
        <button className="facebook" onClick={props.authenticate('Facebook')}>Sign in with facebook</button>
    </div>
);

export default Login