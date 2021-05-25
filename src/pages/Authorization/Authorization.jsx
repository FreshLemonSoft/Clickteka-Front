import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import { paths } from '../../config';
import { SignIn, SignUp, ForgotPassword } from './forms';

const useStyles = makeStyles(() => ({
  container: {
    padding: '50px',
  },
  logo: {
    background: 'linear-gradient(101.7deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 21.5%, rgba(255, 255, 255, 0.28) 21.51%, rgba(255, 255, 255, 0) 45.14%), radial-gradient(100% 144.66% at 0% 0%, rgba(169, 52, 241, 0.8) 0%, rgba(148, 103, 221, 0.8) 100%)',
    width: '93px',
    height: '66px',
  },
}));

// eslint-disable-next-line react/prop-types
const Authorization = ({ location }) => {
  // eslint-disable-next-line react/prop-types
  const { pathname } = location;
  const classes = useStyles();
  return (
    <Box className={classes.container} component="main" maxWidth="xs">
      <Box my="20px">
        <Box className={classes.logo} />
      </Box>
      <Box mx="120px" my="70px">
        {pathname === paths.signIn && (<SignIn />)}
        {pathname === paths.signUp && (<SignUp />)}
        {pathname === paths.forgotPassword && (<ForgotPassword />)}
      </Box>
    </Box>
  );
};

export default Authorization;
