import React from 'react';
import PropTypes from 'prop-types';

const Login = (props) => (
    <div className="login-box">
        <button className="facebook" onClick={() => props.authenticate("Facebook")}>Sign in with facebook</button>
    </div>
);

Login.propTypes = {
    authenticate: PropTypes.func.isRequired
};

export default Login