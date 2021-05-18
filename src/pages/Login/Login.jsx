import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../../components/Forms/LoginForm';

const Login = ({ registration }) => (
  <div>
    <div>{registration ? 'Sign up' : 'Sign in'}</div>
    <LoginForm registration={registration} />
  </div>
);

Login.defaultProps = {
  registration: false,
};

Login.propTypes = {
  registration: PropTypes.bool,
};

export default Login;
