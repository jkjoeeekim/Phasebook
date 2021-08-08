import React from 'react';
import { AuthRoute, AuthRoute2 } from '../utils/route_util';
import { Route } from 'react-router-dom';
import LoginPage from './session/login_page';
import SigninPageContainer from './session/signin_page_container';
import UserProfilePage from './user/user_profile_page';

export default () => (
  <div>
    <AuthRoute2 exact path="/login" component={LoginPage} />
    <AuthRoute exact path="/" component={SigninPageContainer} />
  </div>
);