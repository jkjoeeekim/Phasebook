import React from 'react';
import { AuthRoute } from '../utils/route_util';

export default () => (
  <div>
    {/* <Route path="/" component={LandingPageContainer} /> */}
    <AuthRoute exact path="/"/>
  </div>
);