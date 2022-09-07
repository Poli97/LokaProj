import {userActionTypes} from '../actionTypes/reddit';

export function fetchRedditList() {
  return {
    type: userActionTypes.GET_REDDIT_LIST,
  };
}
