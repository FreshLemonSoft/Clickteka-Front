import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(0deg, rgba(116, 79, 216, 0.3) -0.01%, rgba(57, 150, 247, 0.3) 99.96%)',
    boxShadow: 'inset -5px -5px 10px rgba(255, 255, 255, 0.1), inset 5px 5px 10px rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(7px)',
  },
  paper: {
    margin: '10px',
    width: '775px',
    height: '520px',
    borderRadius: '20px',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #B52A9E',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

// eslint-disable-next-line react/prop-types
const FormModal = ({ children, isOpen, setOpen }) => {
  const classes = useStyles();
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={isOpen}
      onClose={() => setOpen(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpen}>
        <div className={classes.paper}>
          {children}
        </div>
      </Fade>
    </Modal>
  );
};

export default FormModal;
