import {combineReducers} from 'redux';
import courses from './courseReducers';

const roorReducer = combineReducers({
  courses
});

export default roorReducer;

