import {IRedditPost} from '../../core/interfaces/reddit';
import {userActionTypes} from '../actionTypes/reddit';

export interface userState {
  loading: boolean;
  error: any;
  redditList: IRedditPost[];
}

const initialState: userState = {
  loading: false,
  error: undefined,
  redditList: [],
};

export default function redditReducer(
  state = initialState,
  action: any,
): userState {
  console.log(action);
  switch (action.type) {
    case userActionTypes.GET_REDDIT_LIST:
      return {...state, loading: true};
    case userActionTypes.GET_REDDIT_LIST_SUCCESS:
      const reddits = action.payload;
      return {...state, redditList: reddits, loading: false};
    case userActionTypes.GET_REDDIT_LIST_FAIL:
      return {...state, loading: false};
    default:
      return state;
  }
}
