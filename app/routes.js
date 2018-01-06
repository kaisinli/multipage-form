import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import history from './history'
import Main from './components/presentational/Main'

class Routes extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Main} />
      </Router>
    )
  }
}

export default (Routes)
