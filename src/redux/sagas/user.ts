import {call, put, takeLatest} from 'redux-saga/effects';
import {setUsers} from '../actions/user';
import {userActionTypes} from '../actionTypes/user';
import {requestGetUsers} from '../apis/user';

function* getUsers() {
  try {
    const users: any = yield call(requestGetUsers);
    yield put(setUsers(users));
  } catch (err) {}
}

export function* watchUserSaga() {
  yield takeLatest(userActionTypes.GET_USER, getUsers);
}
