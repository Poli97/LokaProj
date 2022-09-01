import {userActionTypes} from '../actionTypes/user';

export function fetchUsers() {
  return {
    type: userActionTypes.GET_USERS,
  };
}

export function fetchUserById(id: string) {
  return {
    type: userActionTypes.GET_USER_BY_ID,
    payload: id,
  };
}

export function clearAll() {
  return {
    type: userActionTypes.CLEAR_ALL,
  };
}
