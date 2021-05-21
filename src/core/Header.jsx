import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  MenuItem,
  Link,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.background.default,
    paddingRight: 79,
    paddingLeft: 118,
    boxShadow: 'none',
    '@media (max-width: 900px)': {
      paddingLeft: 0,
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  drawerContainer: {
    padding: '20px 30px',
  },
}));

const headersData = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Templates',
    href: '/auth/sing-up',
  },
  {
    label: 'Features',
    href: '/auth/sing-up',
  },
  {
    label: 'About us',
    href: '/auth/sing-up',
  },
  {
    label: 'FAQ',
    href: '/auth/sing-up',
  },
];

function Header() {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  const classes = useStyles();

  useEffect(() => {
    const setResponsiveness = () => (window.innerWidth < 900
      ? setState((prevState) => ({ ...prevState, mobileView: true }))
      : setState((prevState) => ({ ...prevState, mobileView: false })));
    setResponsiveness();
    window.addEventListener('resize', () => setResponsiveness());
  }, []);

  const getMenuButtons = () => (
    headersData.map(({ label, href }) => (
      <Button
        {...{
          key: label,
          color: 'secondary',
          to: href,
          component: RouterLink,
        }}
      >
        {label}
      </Button>
    ))
  );

  const appLogo = (
    <Typography variant="h6" component="h1">
      AppLogo
    </Typography>
  );

  const displayDesktop = () => (
    <Toolbar className={classes.toolbar}>
      {appLogo}
      {getMenuButtons()}
    </Toolbar>
  );

  const displayMobile = () => {
    const handleDrawerOpen = () => setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () => setState((prevState) => ({ ...prevState, drawerOpen: false }));

    const getDrawerChoices = () => (
      headersData.map(({ label, href }) => (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: 'secondary',
            style: { textDecoration: 'none' },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      )));

    return (
      <Toolbar>
        <IconButton
          {...{
            children: <MenuIcon />,
            edge: 'start',
            color: 'secondary',
            'aria-label': 'menu',
            'aria-haspopup': 'true',
            onClick: handleDrawerOpen,
          }}
        />
        <Drawer
          {...{
            anchor: 'left',
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={classes.drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
        <div>{appLogo}</div>
      </Toolbar>
    );
  };

  return (
    <header>
      <AppBar className={classes.header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}

export default Header;
