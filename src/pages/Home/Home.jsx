import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <div>home</div>
    <div><Link to="/authorization">Sign in</Link></div>
    <div><Link to="/registration">Sign up</Link></div>
  </div>
);

export default Home;
