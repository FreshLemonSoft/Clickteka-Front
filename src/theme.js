import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: 'Rambla, sans-serif',
  },
  palette: {
    primary: {
      main: '#283e4a',
      contrastText: '#fff',
    },
    secondary: {
      main: '#bfc5c9',
    },
    error: {
      main: '#f44336',
    },
    success: {
      main: '#4caf50',
    },
    background: {
      default: '#fff',
    },
    link: {
      main: '#317a7a',
    },
  },
});

export default theme;
