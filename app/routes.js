import React, { Component } from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import { Main } from './components/containers/Main';

class Routes extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path='/' component={Main}>
                </Route>
            </Router>
        )
    }
}

export default Routes;