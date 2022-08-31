import {userActionTypes} from '../actionTypes/user';

export interface userState {
  loading: boolean;
  users: string[];
}

const initialState: userState = {
  loading: false,
  users: [],
};

export default function userReducer(state = initialState, action: any) {
  console.log(action);
  switch (action.type) {
    case userActionTypes.SET_USER:
      const users = action.payload;
      return {...state, users: users};

    default:
      return state;
  }
}
