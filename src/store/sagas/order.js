import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "./../types/order";
import * as service from "./../services/order";
import * as actions from "./../actions/orderActions";
import { push } from "react-router-redux";

function* getOrder() {
  const result = yield call(service.orders);
  if (result.status === 200) {
    yield put(actions.getOrderSuccess(result.data.message));
  }
}
function* getMyOrder(action) {
  const { user } = action;
  const result = yield call(service.myOrders, user);
  if (result.status === 200) {
    yield put(actions.getOrderSuccess(result.data.message));
  }
}

function* deleteOrder(action) {
  const { id, token } = action.payload;
  const result = yield call(service.deleteOrder, id, token);
  if (result.status === 200) {
    yield put(actions.deleteOrderSuccess(id));
  }
}

export default function* orderWatcher() {
  yield takeLatest(types.GET_ORDER, getOrder);
  yield takeLatest(types.DELETE_ORDER, deleteOrder);
  yield takeLatest(types.GET_MY_ORDER, getMyOrder);
}
