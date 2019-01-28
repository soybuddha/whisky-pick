import { combineReducers } from 'redux';
import WhiskyReducer from './WhiskyReducer';
import TasterReducer from './TasterReducer';

export default combineReducers({
  whiskies: WhiskyReducer,
  tasters: TasterReducer,
});
