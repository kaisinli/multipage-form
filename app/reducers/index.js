import {combineReducers} from 'redux';
import basicInfoReducer from './basicInfoReducer';
import currentPageReducer from './currentPageReducer';

export default combineReducers({
  basicInfo: basicInfoReducer,
  currentPage: currentPageReducer
});