import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import history from './history'
import Main from './components/containers/Main'
import Begin from './components/presentational/Begin';
import BasicInfo from './components/presentational/BasicInfo';
import Location from './components/presentational/Location';
import Education from './components/presentational/Education';

class Routes extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Main}>
          <IndexRoute component={Begin} />
          <Route path='/basicinfo' component={BasicInfo} />
          <Route path='/location' component={Location} />
          <Route path='/education' component={Education} />
        </Route>
      </Router>
    )
  }
}

export default (Routes)
