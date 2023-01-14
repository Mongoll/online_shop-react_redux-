export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_AUTH_SUCCESS = "FETCH_LOGIN_SUCCES";
export const FETCH_USERS_FAILURE = "FETCH_AUTH_FAILURE";
export const SET_LOGOUT_USER = "SET_LOGOUT_USER";

export type UserState = {
  users: User[];
  currentUser: User | undefined;
  error: string;
};

export type Role = "admin" | "customer";

export type User = {
  id: number;
  email: string;
  password: string;
  role: Role;
  avatar: string;
  name: string;
};

//Action types
export type FetchAllUsersSuccessAction = {
  type: typeof FETCH_USERS_SUCCESS;
  payload: UserState[];
};

export type FetchAuthSuccessAction = {
  type: typeof FETCH_AUTH_SUCCESS;
  payload: UserState;
};

export type FetchAllUsersFailureAction = {
  type: typeof FETCH_USERS_FAILURE;
  payload: string;
};

export type SetLogOutUserAction = {
  type: typeof SET_LOGOUT_USER;
  payload: UserState;
};

export type UserActions =
  | FetchAllUsersSuccessAction
  | FetchAuthSuccessAction
  | SetLogOutUserAction
  | FetchAllUsersFailureAction;
