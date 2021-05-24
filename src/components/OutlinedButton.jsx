import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const buttonSize = {
  small: {
    desktop: 130,
    mobile: 100,
  },
  medium: {
    desktop: 160,
    mobile: 130,
  },
  large: {
    desktop: 190,
    mobile: 160,
  },
};

const useStyles = makeStyles((theme) => ({
  button: (props) => ({
    width: buttonSize[props.size].desktop,
    textTransform: 'capitalize',
    backgroundImage: theme.palette.primary.button,
    background: theme.palette.primary.button,
    border: `0.7px solid ${theme.palette.primary.main}`,
    backgroundClip: 'text',
    textFillColor: 'transparent',
    letterSpacing: 0.5,
    borderRadius: 40,
    height: 40,
    fontWeight: 500,
    fontSize: 16,
    [theme.breakpoints.down('sm')]: {
      width: buttonSize[props.size].mobile,
      height: 33,
      fontSize: 12,
    },
  }),
}));

function OutlinedButton({
  name,
  size,
  action,
  disabled,
}) {
  const classes = useStyles({ size, disabled });
  return (
    <Button
      disabled={disabled}
      className={classes.button}
      onClick={action}
    >
      {name}
    </Button>
  );
}

OutlinedButton.propTypes = {
  name: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  size: PropTypes.string,
  disabled: PropTypes.bool,
};

OutlinedButton.defaultProps = {
  size: 'small',
  disabled: false,
};

export default OutlinedButton;
