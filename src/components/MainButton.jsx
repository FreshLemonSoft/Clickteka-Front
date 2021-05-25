import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const buttonSize = {
  small: {
    desktop: 196,
    mobile: 172,
  },
  medium: {
    desktop: 392,
    mobile: 207,
  },
  large: {
    desktop: 382,
    mobile: 272,
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
    height: 63,
    padding: '0 30px',
    fontWeight: 500,
    fontSize: 25,
    [theme.breakpoints.down('sm')]: {
      width: buttonSize[props.size].mobile,
      height: 54,
      fontSize: 18,
    },
    '&.MuiButtonBase-root:disabled': {
      background: theme.palette.secondary.main,
      color: theme.palette.primary.contrastText,
    },
  }),
  border: (props) => ({
    background: props.disabled
      ? theme.palette.primary.disabledButton : theme.palette.primary.button,
    width: buttonSize[props.size].desktop + 18,
    height: 83,
    [theme.breakpoints.down('sm')]: {
      width: buttonSize[props.size].mobile + 18,
      height: 73,
    },
  }),
  gap: (props) => ({
    background: theme.palette.background.default,
    width: buttonSize[props.size].desktop + 14.5,
    height: 80,
    [theme.breakpoints.down('sm')]: {
      width: buttonSize[props.size].mobile + 14.5,
      height: 70,
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
