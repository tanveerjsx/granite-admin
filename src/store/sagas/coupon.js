import { call, put, takeLatest, select } from "redux-saga/effects";
import * as types from "./../types/coupon";
import * as service from "./../services/coupon";
import * as actions from "./../actions/couponAction";
import { push } from "react-router-redux";
import { authSelector } from "./../reducers";

//GET COUPON
function* getCoupons() {
  const result = yield call(service.coupons);
  if (result.status === 200) {
    yield put(actions.getCouponsSuccess(result.data.message));
  }
}
//GET MY PRODUCTS
function* getMyCoupons(action) {
  const { id } = action;
  const result = yield call(service.getMyCoupons, id);
  if (result.status === 200) {
    yield put(actions.getCouponsSuccess(result.data.message));
  }
}
//ADD COUPON
function* addCoupon(action) {
  let { role } = yield select(authSelector);
  const { coupon, token } = action.payload;
  const result = yield call(service.addCoupon, coupon, token);
  if (result.status === 201) {
    yield put(actions.addCouponSuccess());
  }
  if (role === "admin") {
    yield put(push("/admin/Coupons"));
  } else if (role === "vendor") {
    yield put(push("/vendor/Coupons"));
  }
}
//DELETE COUPON
function* deleteCoupons(action) {
  const { id, token } = action.payload;
  const result = yield call(service.deleteCoupons, id, token);
  if (result.status === 200) {
    yield put(actions.deleteCouponsSuccess(id));
  }
}
//UPDATE
function* updateCoupon(action) {
  let { role } = yield select(authSelector);
  const { _id, coupon, token } = action.payload;
  const data = { _id, coupon };
  const result = yield call(service.updateCoupon, _id, coupon, token);
  if (result.status === 200) {
    yield put(actions.updateCouponSuccess(data));
  }
  if (role === "admin") {
    yield put(push("/admin/Coupons"));
  } else if (role === "vendor") {
    yield put(push("/vendor/Coupons"));
  }
}

export default function* couponWatcher() {
  yield takeLatest(types.GET_COUPONS, getCoupons);
  yield takeLatest(types.DELETE_COUPON, deleteCoupons);
  yield takeLatest(types.ADD_COUPON, addCoupon);
  yield takeLatest(types.UPDATE_COUPON, updateCoupon);
  yield takeLatest(types.GET_MY_COUPONS, getMyCoupons);
}
