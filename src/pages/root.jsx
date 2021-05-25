import React from 'react';
import {
  Switch, Route, Redirect, BrowserRouter,
} from 'react-router-dom';
import Home from './Home/Home';
import AboutUs from './AboutUs/AboutUs';
import Authorization from './Authorization';
import { paths } from '../config';
import Header from '../core/Header';

const Root = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={AboutUs} />
      <Route exact path="/templates" component={() => <div>New page</div>} />
      <Route exact path="/features" component={() => <div>New page</div>} />
      <Route exact path="/faq" component={() => <div>New page</div>} />
      <Route
        path={[paths.signIn, paths.signUp, paths.forgotPassword]}
        component={Authorization}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

export default Root;
