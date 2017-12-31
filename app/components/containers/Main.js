import React, { Component } from 'react';
import Begin from '../presentational/Begin'
import { connect } from 'react-redux'
import { dispatchShowPages } from '../../reducers/loadPages'

const Main = (props) => {
  return (
    <div>
      <h1>Sign Me Up</h1>
    </div>
  )
}

// grabbing what we need from state
const mapState = (state) => {
  return {
    loadPages: state.loadPages
  }
}

export default connect(mapState, null)(Main);
