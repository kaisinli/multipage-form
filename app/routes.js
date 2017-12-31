import React from 'react';
import { Route, Router } from 'react-router-dom';
import history from './history'
import Main from './components/containers/Main'
import { connect } from 'react-redux'
import store from './store';

import { changePageStatus } from './reducers/loadPages'

class Routes extends React.Component {

  componentWillMount() {
    store.dispatch(this.props.changePageStatus('begin'))
  }

  render() {
    return (
      <Router history={history}>
        <Main />
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return state.loadPages
}

const mapDispatchToProps = { changePageStatus }

export default connect(mapStateToProps, mapDispatchToProps)(Routes)



