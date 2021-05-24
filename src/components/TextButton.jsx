import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  button: () => ({
    textTransform: 'capitalize',
    letterSpacing: 0.5,
    borderRadius: 40,
    height: 40,
    fontWeight: 500,
    fontSize: 16,
    width: 'max-content',
  }),
}));

function TextButton({
  name,
  size,
  action,
}) {
  const classes = useStyles({ size });
  return (
    <Button
      className={classes.button}
      onClick={action}
      color="secondary"
    >
      {name}
    </Button>
  );
}

TextButton.propTypes = {
  name: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  size: PropTypes.string,
};

TextButton.defaultProps = {
  size: 'small',
};

export default TextButton;
