import React, { useEffect } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import store from './redux/store';
import Builder from './builder/builder';
import Root from './pages/root';

function App() {
  useEffect(() => {
    const configuration = {
      urlStore: '/store',
      urlLoad: '/load',
    };

    const builder = new Builder(configuration);
    builder.init();
    console.log(builder.editor);
    return () => {
      builder.destroy();
    };
    // eslint-disable-next-line
  }, []);

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
