import {userActionTypes} from '../actionTypes/user';

export function fetchUsers() {
  return {
    type: userActionTypes.GET_USER,
  };
}

export function setUsers(users: any) {
  return {
    type: userActionTypes.SET_USER,
    payload: users,
  };
}

export function getchUserById(id: string) {
  return {
    type: userActionTypes.GET_USER,
    payload: id,
  };
}
