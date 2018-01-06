'use strict'

import {combineReducers} from 'redux';
import currentPageReducer from './currentPageReducer';
import infoReducer from './infoReducer';

export default combineReducers({
  currentPage: currentPageReducer,
  info: infoReducer
});