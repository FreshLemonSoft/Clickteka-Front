import { combineReducers } from 'redux';
import editorReducer from './editorReducer';
import authReducer from './authorizationReducer';

const reducers = combineReducers({
  editorReducer,
  authReducer,
});

export default reducers;
