import React from 'react';
import {
  Typography, makeStyles, Box, FormControlLabel, Checkbox, Link,
} from '@material-ui/core';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import FormInput from '../../../components/FormInput';
import { paths } from '../../../config';
import MainButton from '../../../components/MainButton';

const useStyles = makeStyles({
  heading: {
    fontWeight: '600',
    fontSize: '34px',
    marginBottom: '37px',
  },
  fullWidth: {
    width: '100%',
    marginBottom: '24px',
  },
  checkBoxLabel: {
    fontSize: '16px !important',
    color: '#C4C4C4',
  },
  captionFontSize: {
    fontSize: '12px',
  },
});

const useLabelOverride = makeStyles({
  label: {
    fontSize: '16px',
    color: '#C4C4C4',
  },
});

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('send', values);
    },
  });

  const labelOverride = useLabelOverride();
  const styles = useStyles();
  const history = useHistory();

  return (
    <>
      <Typography className={styles.heading} variant="h4" gutterBottom>
        Login to your account
      </Typography>
      <FormInput
        boxClassName={styles.fullWidth}
        inputLabel="Email"
        id="email"
        placeholder="John.snow@gmail.com"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <FormInput
        boxClassName={styles.fullWidth}
        inputLabel="Password"
        id="password"
        placeholder="********"
        label="Password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <Box mb="42px" display="flex" justifyContent="center" alignItems="center">
        <FormControlLabel
          classes={labelOverride}
          className={styles.checkBoxLabel}
          control={(
            <Checkbox
              checked={formik.values.remember}
              onChange={formik.handleChange}
              id="remember"
              color="primary"
            />
                )}
          label="Remember me"
        />
        <Link
          href="/forgot-password"
          onClick={(e) => {
            e.preventDefault();
            history.push(paths.forgotPassword);
          }}
          variant="body2"
        >
          Forgot password?
        </Link>
      </Box>
      <MainButton
        disabled={!formik.isValid}
        action={() => { formik.submitForm(); }}
        size="large"
        name="Sing in"
      />
      <Box mt="31px" display="flex" justifyContent="center" alignItems="center">
        <Typography
          className={styles.captionFontSize}
          variant="caption"
          display="block"
          gutterBottom
        >
          Don’t have an account?&ensp;
          <Link
            className={styles.captionFontSize}
            href={`/${paths.signUp}`}
            onClick={(e) => {
              e.preventDefault();
              history.push(paths.signUp);
            }}
            variant="body2"
          >
            Create account
          </Link>
        </Typography>
      </Box>
    </>
  );
};

export default SignIn;
