import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import store from './redux/store';
import Root from './pages/root';

function App() {
  return (
    <>
      <MuiThemeProvider>
        <CssBaseline />
        <StoreProvider store={store}>
          <Root />
        </StoreProvider>
      </MuiThemeProvider>
    </>
  );
}

export default App;
