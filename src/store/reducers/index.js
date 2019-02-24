import { combineReducers } from 'redux';
import FilterReducer from './FilterReducer';
import TasterReducer from './TasterReducer';
import WhiskyReducer from './WhiskyReducer';

export default combineReducers({
  filters: FilterReducer,
  tasters: TasterReducer,
  whiskies: WhiskyReducer,
});
