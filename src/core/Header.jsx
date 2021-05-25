import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  MenuItem,
  Link,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink, useLocation, useHistory } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import SVG from 'react-inlinesvg';
import OutlinedButton from '../components/OutlinedButton';
import TextButton from '../components/TextButton';
import { paths } from '../config';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.background.default,
    padding: '20px 79px 20px 118px',
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 900px)': {
      paddingLeft: 0,
    },
    position: 'static',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexBasis: '80%',
    paddingRight: 0,
  },
  drawerContainer: {
    padding: '20px 30px',
  },
  separator: {
    backgroundImage: theme.palette.primary.button,
    height: 30,
    width: 2,
  },
  logo: {
    height: '50px',
    width: 'auto',
  },
  button: {
    margin: '0 0.05%',
  },
  link: {
    margin: '0 0.7%',
    '&:hover': {
      color: theme.palette.secondary.dark,
    },
  },
  activeLink: {
    backgroundImage: theme.palette.primary.button,
    '-webkit-background-clip': 'text',
    backgroundClip: 'text',
    '-webkit-text-fill-color': 'transparent',
    textFillColor: 'transparent',
  },
}));

const headersData = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Templates',
    href: '/templates',
  },
  {
    label: 'Features',
    href: '/features',
  },
  {
    label: 'About us',
    href: '/about',
  },
  {
    label: 'FAQ',
    href: '/faq',
  },
];

function Header() {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;
  const { pathname } = useLocation();

  const classes = useStyles();

  useEffect(() => {
    const setResponsiveness = () => (window.innerWidth < 900
      ? setState((prevState) => ({ ...prevState, mobileView: true }))
      : setState((prevState) => ({ ...prevState, mobileView: false })));
    setResponsiveness();
    window.addEventListener('resize', setResponsiveness);

    return () => window.removeEventListener('resize', setResponsiveness);
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
        className={href === pathname ? `${classes.link} ${classes.activeLink}` : classes.link}
      >
        {label}
      </Button>
    ))
  );

  const LogoView = () => (
    <div className={classes.logo}>
      <SVG src="/logo.svg" />
    </div>
  );

  const displayDesktop = () => (
    <Toolbar className={classes.toolbar}>
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
        {LogoView()}
      </Toolbar>
    );
  };

  const history = useHistory();

  return (
    <>
      {![paths.signIn, paths.signUp, paths.forgotPassword].some((p) => p === pathname)
      && (
      <header>
        <AppBar className={classes.header}>
          {!mobileView && LogoView()}
          {mobileView ? displayMobile() : displayDesktop()}
          <div className={classes.separator} />
          <div className={classes.button}>
            <TextButton
              name="log in"
              action={() => {
                history.push(paths.signIn);
              }}
            />
          </div>
          <div className={classes.button}>
            <OutlinedButton
              name="sign up"
              action={() => {
                history.push(paths.signUp);
              }}
            />
          </div>
        </AppBar>
      </header>
      )}
    </>
  );
}

export default Header;
