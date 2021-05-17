import React, { useEffect, useState } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import store from './redux/store';
import Builder from './builder/builder';

function App() {
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    const configuration = {
      urlStore: '/store',
      urlLoad: '/load',
    };

    const builder = new Builder(configuration);
    builder.init();
    console.log(builder.editor);
    setEditor(builder.editor);
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
          <button
            type="button"
            onClick={() => {
              console.log(editor.DeviceManager.getAll()); // editor.setDevice('c8');
              const commands = editor.Commands.getAll();
              console.log(commands);
              editor.Commands.run('core:fullscreen');
              console.log(editor);
            }}
          >
            Ebat
          </button>
          <div id="builderContainer" />
        </StoreProvider>
      </MuiThemeProvider>
    </>
  );
}

export default App;
