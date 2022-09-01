import {userActionTypes} from '../actionTypes/user';

export interface userState {
  loading: boolean;
  users: string[];
  error: any;
  userById: string;
}

const initialState: userState = {
  loading: false,
  users: [],
  error: undefined,
  userById: '',
};

export default function userReducer(
  state = initialState,
  action: any,
): userState {
  console.log(action);
  switch (action.type) {
    case userActionTypes.GET_USERS:
      return {...state, loading: true};
    case userActionTypes.GET_USERS_SUCCESS:
      const usersServer = action.payload as any[];
      const users = usersServer.map(u => u.name);
      return {...state, loading: false, users: users};
    case userActionTypes.GET_USERS_SUCCESS:
      const error = action.payload;
      return {...state, loading: false, users: [], error: error};

    case userActionTypes.GET_USER_BY_ID:
      return {...state, loading: true};
    case userActionTypes.GET_USER_BY_ID_SUCCESS:
      const userServer = action.payload as any;
      const user = userServer.name;
      return {...state, loading: false, userById: user};
    case userActionTypes.GET_USER_BY_ID_FAIL:
      const errorU = action.payload;
      return {...state, loading: false, userById: '', error: errorU};

    case userActionTypes.CLEAR_ALL:
      return {loading: false, users: [], userById: '', error: undefined};

    default:
      return state;
  }
}
