import React from 'react';
import {
  Switch, Route, Redirect, BrowserRouter,
} from 'react-router-dom';
import Home from './Home/Home';
import Authorization from './Authorization';
import { paths } from '../config';

const Root = () => {
  const isAuthComplete = false;
  return (
    <BrowserRouter>
      {isAuthComplete && <div>Header</div>}
      <Switch>
        <Route
          path={[paths.singIn, paths.signUp, paths.forgotPassword]}
          component={Authorization}
        />
        {isAuthComplete && (
          <>
            <Route exact path="/home" component={Home} />
          </>
        )}
        <Redirect to={isAuthComplete ? '/home' : paths.singIn} />
      </Switch>
    </BrowserRouter>
  );
};

export default Root;
