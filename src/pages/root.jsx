import React from 'react';
import {
  Switch, Route, Redirect, BrowserRouter,
} from 'react-router-dom';
import Home from './Home/Home';
import AboutUs from './AboutUs/AboutUs';
import Authorization from './Authorization';
import { paths } from '../config';

const Root = () => {
  const isAuthComplete = false;
  return (
    <BrowserRouter>
      {isAuthComplete && <div>Header</div>}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={AboutUs} />
        <Route
          path={[paths.singIn, paths.signUp, paths.forgotPassword]}
          component={Authorization}
        />
        {/* {isAuthComplete && (
          <>
            <Route exact path="/home" component={Home} />
          </>
        )} */}
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Root;
