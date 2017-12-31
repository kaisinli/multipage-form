import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  loadPages: require('./loadPages').default,
})

export default rootReducer
