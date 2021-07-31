import React from 'react';
import { Route } from 'react-router-dom';
import LandingPageContainer from './landing_page/landing_page_container';

export default () => (
  <div>
    <Route path="/" component={LandingPageContainer} />
  </div>
);