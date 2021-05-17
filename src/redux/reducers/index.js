import { combineReducers } from 'redux';
import testReducer from './testReducer';
import editorReducer from './editorReducer';

const reducers = combineReducers({
  testReducer,
  editorReducer,
});

export default reducers;
