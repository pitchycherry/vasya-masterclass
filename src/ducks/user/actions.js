import * as types from "./types";

export const fetchUserById = id => ({
  type: types.FETCH_USER_REQUEST,
  id
});
export const fetchUserSuccess = user => ({
  type: types.FETCH_USER_SUCCESS,
  user
});
