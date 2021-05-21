import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import store from './redux/store';
import Root from './pages/root';
import theme from './theme';

function App() {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <StoreProvider store={store}>
          <Root />
        </StoreProvider>
      </MuiThemeProvider>
    </>
  );
}

export default App;
