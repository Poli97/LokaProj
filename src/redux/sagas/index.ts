import {spawn} from '@redux-saga/core/effects';
import {watchRedditSaga} from './reddit';

export default function* rootSaga() {
  yield spawn(watchRedditSaga);
}
