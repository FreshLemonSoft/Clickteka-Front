import React from 'react';
import {
  Switch, Route, Redirect, BrowserRouter,
} from 'react-router-dom';
import Home from './Home/Home';

const Root = () => {
  const isAuthComplete = true;
  return (
    <BrowserRouter>
      {isAuthComplete && <div>Header</div>}
      <Switch>
        <Route exact path="/authorization" component={<div>Authorization</div>} />
        {isAuthComplete && (
          <>
            <Route exact path="/home" component={Home} />
          </>
        )}
        <Redirect to={isAuthComplete ? '/home' : '/authorization'} />
      </Switch>
    </BrowserRouter>
  );
};

export default Root;
