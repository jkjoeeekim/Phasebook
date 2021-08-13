import React from 'react';
import { AuthRoute, AuthRoute2, AuthRoute3 } from '../utils/route_util';
import { Route } from 'react-router-dom';
import LoginPage from './session/login_page';
import SigninPageContainer from './session/signin_page_container';
import UserSearchPageContainer from './user/user_search_page_container';

export default () => (
  <div>
    <AuthRoute2 exact path="/login" component={LoginPage} />
    <AuthRoute3 exact path="/search" component={UserSearchPageContainer} />
    <AuthRoute exact path="/" component={SigninPageContainer} />
  </div>
);