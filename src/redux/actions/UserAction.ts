import { Dispatch } from "redux";
import axios from "axios";

import {
  FETCH_AUTH_SUCCESS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  SET_LOGOUT_USER,
  UserActions,
  UserState,
} from "../../types";

export function fetchAuthSuccess(currentUser: UserState): UserActions {
  return {
    type: FETCH_AUTH_SUCCESS,
    payload: currentUser,
  };
}

export function fetchAllUsersSuccess(users: UserState[]): UserActions {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
}

export function fetchAllUsersFailure(error: string): UserActions {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
}

export function setLogOutUser(currentUser: UserState): UserActions {
  return {
    type: SET_LOGOUT_USER,
    payload: currentUser,
  };
}

export function fetchAllUsers() {
  return function (dispatch: Dispatch) {
    //axios call
    axios
      .get("https://api.escuelajs.co/api/v1/users")
      .then((res) => {
        const users = res.data as UserState[];
        dispatch(fetchAllUsersSuccess(users));
      })
      .catch((err) => {
        dispatch(fetchAllUsersFailure(err));
      });
  };
}

export function fetchAuth(token: string) {
  return function (dispatch: Dispatch) {
    axios
      .get("https://api.escuelajs.co/api/v1/auth/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const currentUser = res.data as UserState;
        dispatch(fetchAuthSuccess(currentUser));
      })
      .catch((err) => {
        dispatch(fetchAllUsersFailure(err));
      });
  };
}
