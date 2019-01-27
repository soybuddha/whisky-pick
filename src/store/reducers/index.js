import { combineReducers } from 'redux';
import WhiskyReducer from './WhiskyReducer';

export default combineReducers({
  whiskies: WhiskyReducer,
});
