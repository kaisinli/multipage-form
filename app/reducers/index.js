'use strict'

import {combineReducers} from 'redux';
import basicInfoReducer from './basicInfoReducer';
import currentPageReducer from './currentPageReducer';
import locationReducer from './locationReducer';
import educationReducer from './educationReducer'

export default combineReducers({
  basicInfo: basicInfoReducer,
  currentPage: currentPageReducer,
  location: locationReducer,
  education: educationReducer
});