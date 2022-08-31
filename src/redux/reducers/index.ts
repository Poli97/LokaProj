import {combineReducers} from 'redux';
import userReducer, {userState} from './user';

export interface IReducerState {
  userReducer: userState;
}

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;
