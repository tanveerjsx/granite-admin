import * as types from "../types/user";
import { actionChannel } from "redux-saga/effects";

export const getVendor = () => {
  return {
    type: types.GET_VENDORS
  };
};
export const getVendorSuccess = data => {
  return {
    type: types.GET_VENDORS_SUCCESS,
    vendors: data
  };
};

export const activeVendor = (id, token) => {
  return {
    type: types.ACTIVATE_VENDOR,
    payload: { id, token }
  };
};
export const activeVendorSuccess = data => {
  return {
    type: types.ACTIVATE_VENDOR_SUCCESS,
    data
  };
};

export const activateUserSuccess = data => {
  return {
    type: types.ACTIVATE_USER_SUCCESS,
    data
  };
};

export const getUsers = () => {
  return {
    type: types.GET_USERS
  };
};
export const getUsersSuccess = data => {
  return {
    type: types.GET_USERS_SUCCESS,
    user: data
  };
};
export const deleteUser = (_id, token) => {
  return {
    type: types.DELETE_USER,
    payload: { _id, token }
  };
};
export const deleteUserSuccess = updateUser => {
  return {
    type: types.DELETE_USER_SUCCESS,
    updateUser
  };
};
export const getRoles = token => {
  return {
    type: types.GET_ROLES,
    token
  };
};
export const getRolesSuccess = roles => {
  return {
    type: types.GET_ROLES_SUCCESS,
    roles
  };
};
