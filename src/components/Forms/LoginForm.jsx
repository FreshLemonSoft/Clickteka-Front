import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';

import { signinUser, signupUser } from '../../api/api';

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8 || values.password.length > 15) {
    errors.password = 'Must be between 8 and 15 characters';
  }

  return errors;
};

const LoginForm = ({ registration }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validate,

    onSubmit: async (values) => {
      const { email, password } = values;
      let req;
      if (registration) {
        req = await signupUser({ email, password });
      } else {
        req = await signinUser({ email, password });
      }
      console.log(req.data);
    },

  });

  return (
    <Container maxWidth="sm">
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          type="text"
          label="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" type="submit" disabled={Boolean(Object.keys(formik.errors).length)}>
          Submit
        </Button>
      </form>
    </Container>
  );
};

LoginForm.defaultProps = {
  registration: false,
};

LoginForm.propTypes = {
  registration: PropTypes.bool,
};

export default LoginForm;
