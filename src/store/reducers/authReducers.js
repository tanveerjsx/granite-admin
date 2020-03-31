import * as types from "./../types/auth";
import { rootReducers } from "./index";

const initialState = {
  isAuthenticated: false,
  user: {},
  token: "",
  role: ""
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      const { userId } = action.payload.user;
      const { token } = action.payload;
      const { role } = action.payload.user;
      return {
        ...state,
        isAuthenticated: true,
        user: userId,
        token: token,
        role: role
      };

    case types.LOGOUT_USER: {
      // state = undefined;
      // return rootReducers(state, action);
      return {
        state: undefined
        // isAuthenticated: false,
        // user: {},
        // token: "",
        // role: ""
      };
    }
    default:
      return state;
  }
};

export default authReducers;
