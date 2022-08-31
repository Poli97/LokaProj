import {spawn} from '@redux-saga/core/effects';
import {watchUserSaga} from './user';

export default function* rootSaga() {
  yield spawn(watchUserSaga);
}
