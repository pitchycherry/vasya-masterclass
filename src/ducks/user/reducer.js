import * as userTypes from "./types";
const initialState = {
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case userTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
};
