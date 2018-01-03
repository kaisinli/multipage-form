import React, { Component } from 'react';
import Begin from '../presentational/Begin';
import BasicInfo from '../presentational/BasicInfo';

const Main = (props) => {
  return (
    <div id = "main-container">
      <h1 id = "main-title">Sign Me Up</h1>
      {props.children}
    </div>
  )
}

export default Main;
