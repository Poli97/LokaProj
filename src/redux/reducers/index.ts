import {combineReducers} from 'redux';
import redditReducer, {userState} from './reddit';

export interface combinedAppState {
  redditReducer: userState;
}

const rootReducer = combineReducers({
  redditReducer,
});

export default rootReducer;
