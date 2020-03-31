import { base_url } from "../../Utils";
import * as types from "./../types/auth";

export const signup = user => {
  return async dispatch => {
    try {
      const response = await fetch(`${base_url}/user/signup`, {
        headers: {
          "Content-Type": "application/json",
          Accepts: "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          password: user.password
        })
      });
      const jsonResponse = await response.json();
      return jsonResponse;
    } catch (error) {}
  };
};
export const login = (email, password) => {
  return {
    type: types.LOGIN,
    payload: { email, password }
  };
};
export const loginSuccess = data => {
  return {
    type: types.LOGIN_SUCCESS,
    payload: data
  };
};

export const register = data => {
  return {
    type: types.REGISTER,
    payload: data
  };
};
export const registerSuccess = () => {
  return {
    type: types.REGISTER_SUCCESS
  };
};

export const logout = () => {
  return {
    type: types.LOGOUT_USER
  };
};
