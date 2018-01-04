import React, { Component } from 'react';
import Begin from '../presentational/Begin';
import BasicInfo from '../presentational/BasicInfo';
import Location from '../presentational/Location';
import Education from '../presentational/Education';
import Summary from '../presentational/Summary';
import { connect } from 'react-redux';

const Main = (props) => {
  console.log('props in main', props)
  return (
    <div id="main-container">
      <h1 id="main-title">Sign Me Up</h1>
      {props.currentPage === 0 && <Begin />}
      {props.currentPage === 1 && <BasicInfo />}
      {props.currentPage === 2 && <Location />}
      {props.currentPage === 3 && <Education />}
      {props.currentPage === 4 && <Summary />}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentPage: state.currentPage.currentPage
  }
}

export default connect(mapStateToProps, null)(Main)
