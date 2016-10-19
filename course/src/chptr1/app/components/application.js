import React from 'react';
import Introduction from './introduction/Introduction';
import Cmp2   from './component2/Component2';
import Template from './application-template';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

export default () => {
  return (
      <Router history={hashHistory}>
        <Route path="/" component={Template}>
          <IndexRoute component={Introduction}/>
          <Route path="page2" component={Cmp2}   />
        </Route>
      </Router>
  )
}