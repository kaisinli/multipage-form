import React, { Component } from 'react';
import Begin from '../presentational/Begin';
import BasicInfo from '../presentational/BasicInfo';
import Location from '../presentational/Location';
import { connect } from 'react-redux';

const Main = (props) => {
  console.log('props in main', props)
  return (
    <div id="main-container">
      <h1 id="main-title">Sign Me Up</h1>
      {props.currentPage === 1 && <Begin />}
      {props.currentPage === 2 && <BasicInfo />}
      {props.currentPage === 3 && <Location />}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentPage: state.currentPage.currentPage
  }
}

export default connect(mapStateToProps, null)(Main)
