import React from 'react';
import {
  Switch, Route, Redirect, BrowserRouter,
} from 'react-router-dom';
import Home from './Home/Home';
import Login from './Login/Login';

const Root = () => {
  const isAuthComplete = true;
  return (
    <BrowserRouter>
      {isAuthComplete && <div>Header</div>}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/authorization" component={Login} />
        <Route path="/registration">
          <Login registration />
        </Route>
        {/* {isAuthComplete && (
          <>
            <Route exact path="/" component={Home} />
          </>
        )} */}
        <Redirect to={isAuthComplete ? '/' : '/authorization'} />
      </Switch>
    </BrowserRouter>
  );
};

export default Root;
