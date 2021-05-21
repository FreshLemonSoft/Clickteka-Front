import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const buttonSize = {
  small: {
    desktop: 203,
    mobile: 180,
  },
  medium: {
    desktop: 300,
    mobile: 215,
  },
  large: {
    desktop: 400,
    mobile: 280,
  },
};

const useStyles = makeStyles((theme) => ({
  button: (props) => ({
    background: theme.palette.primary.button,
    color: theme.palette.primary.contrastText,
    width: buttonSize[props.size].desktop,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    textTransform: 'capitalize',
    letterSpacing: 0.5,
    borderRadius: 40,
    height: 37,
    padding: '0 30px',
    fontWeight: 500,
    fontSize: 16,
    [theme.breakpoints.down('sm')]: {
      width: buttonSize[props.size].mobile,
      height: 30,
      fontSize: 14,
    },
    '&.MuiButtonBase-root:disabled': {
      background: theme.palette.secondary.main,
      color: theme.palette.primary.contrastText,
    },
  }),
  border: (props) => ({
    background: props.disabled
      ? theme.palette.primary.disabledButton : theme.palette.primary.button,
    width: buttonSize[props.size].desktop + 10,
    height: 47,
    [theme.breakpoints.down('sm')]: {
      width: buttonSize[props.size].mobile + 10,
      height: 37,
    },
  }),
  gap: (props) => ({
    background: theme.palette.background.default,
    width: buttonSize[props.size].desktop + 8,
    height: 45,
    [theme.breakpoints.down('sm')]: {
      width: buttonSize[props.size].mobile + 8,
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

function MainButton({
  name,
  size,
  action,
  disabled,
}) {
  const classes = useStyles({ size, disabled });
  return (
    <div className={`${classes.border} ${classes.wrapper}`}>
      <div className={`${classes.gap} ${classes.wrapper}`}>
        <Button disabled={disabled} className={classes.button} onClick={action}>{name}</Button>
      </div>
    </div>
  );
}

MainButton.propTypes = {
  name: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  size: PropTypes.string,
  disabled: PropTypes.bool,
};

MainButton.defaultProps = {
  size: 'small',
  disabled: false,
};

export default MainButton;
