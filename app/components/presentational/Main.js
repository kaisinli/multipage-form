import React, { Component } from 'react';
import Begin from '../containers/Begin';
import BasicInfo from '../containers/BasicInfo';
import Location from '../containers/Location';
import Education from '../containers/Education';
import Summary from '../containers/Summary';
import ThankYou from './ThankYou'
import { connect } from 'react-redux';

const Main = (props) => {
  return (
    <div id="main-container">
      <h1 id="main-title">Create Profile</h1>
      {props.currentPage === 0 && <Begin />}
      {props.currentPage === 1 && <BasicInfo />}
      {props.currentPage === 2 && <Location />}
      {props.currentPage === 3 && <Education />}
      {props.currentPage === 4 && <Summary />}
      {props.currentPage === 5 && <ThankYou />}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentPage: state.currentPage.currentPage
  }
}

export default connect(mapStateToProps, null)(Main)
