import {
  FETCH_AUTH_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
  SET_LOGOUT_USER,
  UserActions,
  UserState,
} from "../../types";

const initialState: UserState = {
  users: [],
  currentUser: undefined,
  error: "",
};

export default function usersReducer(
  state: UserState = initialState,
  actions: UserActions
) {
  switch (actions.type) {
    //if fetching is successful
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: actions.payload,
        error: "",
      };
    case FETCH_AUTH_SUCCESS:
      return {
        ...state,
        currentUser: actions.payload,
        error: "",
      };
    //if fetching has any errors
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        error: actions.payload,
      };
    case SET_LOGOUT_USER: {
      localStorage.removeItem("token");
      return {
        ...state,
        currentUser: undefined,
      };
    }
    default:
      return state;
  }
}
