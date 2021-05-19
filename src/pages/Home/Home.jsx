import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteUserData } from '../../redux/reducers/loginReducer';

const Home = () => {
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.loginReducer);

  const setLogOut = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    dispatch(deleteUserData());
  };

  const showAuthButtons = () => {
    let template;
    if (userInfo.email) {
      template = <button type="button" onClick={setLogOut}>Log out</button>;
    } else {
      template = (
        <>
          <div><Link to="/authorization">Sign in</Link></div>
          <div><Link to="/registration">Sign up</Link></div>
        </>
      );
    }

    return template;
  };

  return (
    <div>
      <div>home</div>
      {showAuthButtons()}
    </div>
  );
};

export default Home;
