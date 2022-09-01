import {call, put, takeLatest} from 'redux-saga/effects';
import {userActionTypes} from '../actionTypes/user';
import {requestGetUserById, requestGetUsers} from '../apis/user';

function* getUsers() {
  try {
    const users: any = yield call(requestGetUsers);
    yield put({type: userActionTypes.GET_USERS_SUCCESS, payload: users});
  } catch (err) {
    yield put({type: userActionTypes.GET_USERS_FAIL, payload: err});
  }
}

function* getUserById(action: any) {
  try {
    const users: any = yield call(requestGetUserById, action.payload);
    yield put({type: userActionTypes.GET_USER_BY_ID_SUCCESS, payload: users});
  } catch (err) {
    yield put({type: userActionTypes.GET_USER_BY_ID_FAIL, payload: err});
  }
}

export function* watchUserSaga() {
  yield takeLatest(userActionTypes.GET_USERS, getUsers);
  yield takeLatest(userActionTypes.GET_USER_BY_ID, getUserById);
}
