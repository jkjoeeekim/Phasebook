import React from 'react';
import { AuthRoute, AuthRoute2 } from '../utils/route_util';
import { Route } from 'react-router-dom';
import LoginPage from './session/login_page';
import SigninPage from './session/signin_page';

export default () => (
  <div>
    <AuthRoute2 exact path="/login" component={LoginPage} />
    <AuthRoute exact path="/" component={SigninPage} />
  </div>
);