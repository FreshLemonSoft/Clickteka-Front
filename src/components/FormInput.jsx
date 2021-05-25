import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  FormControl,
  Typography, Input,
  FormHelperText,
} from '@material-ui/core';
/* eslint-disable react/prop-types,react/jsx-props-no-spreading */

const useInputOverride = makeStyles({
  root: {
    border: '1px solid rgba(100, 100, 100, 0.5)',
    boxSizing: 'border-box',
    borderRadius: '40px',
    paddingLeft: '22px',
    paddingRight: '22px',
    height: '55px',
  },
  underline: {
    '&&&:before': {
      borderBottom: 'none',
    },
    '&&:after': {
      borderBottom: 'none',
    },
  },
});

const useHelperTextOverride = makeStyles({
  root: {
    fontSize: '12px',
    textAlign: 'center',
    lineHeight: '20px',
    color: '#F43939',
    marginTop: '9px',
  },
});

const useLabelOverride = makeStyles({
  root: {
    marginLeft: '22px',
  },
});

const FormInput = ({
  inputLabel,
  error,
  helperText,
  boxClassName,
  labelClassName,
  helperTextClassName,
  ...inputProps
}) => {
  const labelClasses = useLabelOverride();
  const inputClasses = useInputOverride();
  const helperTextClasses = useHelperTextOverride();
  return (
    <FormControl className={boxClassName}>
      <Typography className={labelClassName} classes={labelClasses} variant="body1">{inputLabel}</Typography>
      <Input
        classes={inputClasses}
        {...inputProps}
      />
      {error
        && (
        <FormHelperText
          className={helperTextClassName}
          classes={helperTextClasses}
        >
          {helperText}
        </FormHelperText>
        )}
    </FormControl>
  );
};

FormInput.defaultProps = {
  error: false,
  helperText: '',
  inputLabel: '',
  boxClassName: '',
  labelClassName: '',
  helperTextClassName: '',
  fullWidth: true,
};

export default FormInput;
