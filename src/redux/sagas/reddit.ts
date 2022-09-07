import {call, put, takeLatest} from 'redux-saga/effects';
import {userActionTypes} from '../actionTypes/reddit';
import {getRedditList} from '../apis/reddit';

function* getListReddit() {
  try {
    const redditList: any = yield call(getRedditList);
    yield put({
      type: userActionTypes.GET_REDDIT_LIST_SUCCESS,
      payload: redditList,
    });
  } catch (err) {
    yield put({type: userActionTypes.GET_REDDIT_LIST_FAIL, payload: err});
  }
}

export function* watchRedditSaga() {
  yield takeLatest(userActionTypes.GET_REDDIT_LIST, getListReddit);
}
