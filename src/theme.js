import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: 'Inter, sans-serif',
    subtitle1: {
      fontSize: 34,
    },
    body1: {
      fontSize: 21,
    },
    caption: {
      fontSize: 16,
    },
  },
  palette: {
    primary: {
      main: '#ED30AD',
      contrastText: '#fff',
    },
    secondary: {
      main: '#A6A6A6',
      dark: '#646464',
    },
    error: {
      main: '#F43939',
    },
    success: {
      main: '#4caf50',
    },
    background: {
      default: '#E5E5E5',
    },
    link: {
      main: '#0C5FA5',
    },
  },
});

export default theme;
