import React from 'react';
import Template from './application-template';
import Comments from  './Comments/Comments';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

export default () => {
  return (
      <Router history={hashHistory}>
        <Route path="/" component={Template}>
          <IndexRoute component={Comments}/>
        </Route>
      </Router>
  )
}