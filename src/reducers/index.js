import {combineReducers} from 'redux';
import courses from './courseReducers';
import authors from './authorReducers';
import ajaxCallsInProgress from './ajaxStatusReducers';

const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress
});

export default rootReducer;
