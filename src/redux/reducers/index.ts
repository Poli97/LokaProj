import {combineReducers} from 'redux';
import userReducer, {userState} from './user';

export interface combinedAppState {
  userReducer: userState;
}

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;
