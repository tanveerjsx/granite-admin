import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../types/user";
import * as service from "./../services/user";
import * as actions from "../actions/userActions";

function* getVendor(action) {
  const result = yield call(service.getVendor);
  if (result.status === 200) {
    yield put(actions.getVendorSuccess(result.data));
  }
}
function* getUser() {
  const result = yield call(service.getUser);
  if (result.status === 200) {
    yield put(actions.getUsersSuccess(result.data));
  }
}
function* deleteUser(action) {
  const { _id, token } = action.payload;
  const result = yield call(service.deleteUser, _id, token);
  if (result.status === 200) {
    yield put(actions.deleteUserSuccess(result.data.message));
  }
}
function* getRoles(action) {
  const { token } = action;
  const result = yield call(service.getRoles, token);
  if (result.status === 200) yield put(actions.getRolesSuccess(result.data));
}
function* activateVendor(action) {
  const { token, id } = action.payload;
  const result = yield call(service.activateVendor, id, token);
  if (result.status === 200) {
    yield put(actions.activateUserSuccess(result.data.data));
  }
}

export default function* userWatcher() {
  yield takeLatest(types.GET_VENDORS, getVendor);
  yield takeLatest(types.GET_USERS, getUser);
  yield takeLatest(types.DELETE_USER, deleteUser);
  yield takeLatest(types.GET_ROLES, getRoles);
  yield takeLatest(types.ACTIVATE_VENDOR, activateVendor);
}
