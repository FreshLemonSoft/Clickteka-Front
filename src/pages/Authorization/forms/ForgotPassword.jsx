import React, { useState } from 'react';
import {
  Typography, makeStyles, Box, IconButton,
} from '@material-ui/core';
import * as yup from 'yup';
import { useFormik } from 'formik';
import CloseIcon from '@material-ui/icons/Close';
import FormInput from '../../../components/FormInput';
import MainButton from '../../../components/MainButton';
import FormModal from '../../../components/FormModal';

const useStyles = makeStyles({
  heading: {
    fontWeight: '600',
    fontSize: '34px',
    marginBottom: '37px',
  },
  modalHeading: {
    fontSize: '34px',
    marginBottom: '24px',
    color: '#64646499',
    fontWeight: '500',
    textAlign: 'center',
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

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
});

const ForgotPassword = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('open modal &&', values);
      setIsModalOpen(true);
    },
  });

  const styles = useStyles();

  return (
    <>
      <Typography className={styles.heading} variant="h4" gutterBottom>
        Restore password
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
      <MainButton
        disabled={!formik.isValid}
        action={() => { formik.submitForm(); }}
        size="large"
        name="Send link"
      />
      <FormModal isOpen={isModalOpen} setOpen={setIsModalOpen}>
        <Box justifyContent="flex-end" height="60px" display="flex">
          <IconButton onClick={() => { setIsModalOpen(false); }}>
            <CloseIcon fontSize="large" />
          </IconButton>
        </Box>
        <Box
          height="460px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography className={styles.modalHeading} variant="h4">
            A link to reset your password has been sent to your email
          </Typography>
          <MainButton
            action={() => { setIsModalOpen(false); }}
            size="large"
            name="OKAY"
          />
        </Box>
      </FormModal>
    </>
  );
};

export default ForgotPassword;
