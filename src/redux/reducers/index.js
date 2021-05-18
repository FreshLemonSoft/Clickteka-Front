import { combineReducers } from 'redux';
import testReducer from './testReducer';
import editorReducer from './editorReducer';
import { loginReducer } from './loginReducer';

const reducers = combineReducers({
  testReducer,
  editorReducer,
  loginReducer,
});

export default reducers;
