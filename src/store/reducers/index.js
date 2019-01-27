import { combineReducers } from 'redux';
import WhiskyReducer from './WhiskyReducer';
import OtherReducer from './OtherReducer';

export default combineReducers({
  whiskies: WhiskyReducer,
  other: OtherReducer,
});
