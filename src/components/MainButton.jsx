import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const buttonSize = {
  small: {
    desktop: 209,
    mobile: 180,
  },
  medium: {
    desktop: 309,
    mobile: 215,
  },
  large: {
    desktop: 409,
    mobile: 280,
  },
};

const useStyles = makeStyles((theme) => ({
  button: (props) => ({
    background: theme.palette.background.secondary,
    color: theme.palette.primary.contrastText,
    width: buttonSize[props.size].desktop,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    borderRadius: 40,
    height: 40,
    padding: '0 30px',
    fontWeight: 500,
    fontSize: 16,
    [theme.breakpoints.down('sm')]: {
      width: buttonSize[props.size].mobile,
      height: 30,
      fontSize: 14,
    },
  }),
  border: (props) => ({
    background: theme.palette.background.secondary,
    width: buttonSize[props.size].desktop + 8,
    height: 47,
    [theme.breakpoints.down('sm')]: {
      width: buttonSize[props.size].mobile + 8,
      height: 37,
    },
  }),
  gap: (props) => ({
    background: theme.palette.background.default,
    width: buttonSize[props.size].desktop + 6,
    height: 45,
    [theme.breakpoints.down('sm')]: {
      width: buttonSize[props.size].mobile + 6,
      height: 35,
    },
  }),
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
  },
}));

function MainButton({ name, size, action }) {
  const classes = useStyles({ size });
  return (
    <div className={`${classes.border} ${classes.wrapper}`}>
      <div className={`${classes.gap} ${classes.wrapper}`}>
        <Button className={classes.button} onClick={action}>{name}</Button>
      </div>
    </div>
  );
}

MainButton.propTypes = {
  name: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  size: PropTypes.string,
};

MainButton.defaultProps = {
  size: 'small',
};

export default MainButton;
