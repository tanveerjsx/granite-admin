import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "./../actions/authActions";
import * as types from "./../types/auth";
import * as service from "./../services/auth";
import { push } from "react-router-redux";

function* login(action) {
  try {
    const { email, password } = action.payload;
    const result = yield call(service.login, email, password);
    if (result.status === 200) {
      const { role } = result.data.message.user;
      yield put(actions.loginSuccess(result.data.message));
      if (role === "vendor") {
        yield put(push("/vendor/index"));
      }
      if (role === "admin") {
        yield put(push("/admin/index"));
      }
    }
  } catch (error) {
    yield put(push("/auth/login"));
  }
}

export default function* authWatcher() {
  yield takeLatest(types.LOGIN, login);
}
