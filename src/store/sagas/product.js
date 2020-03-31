import { call, put, takeLatest, select } from "redux-saga/effects";
import * as types from "./../types/product";
import * as service from "./../services/product";
import * as actions from "./../actions/productActions";
import { push } from "react-router-redux";
import { authSelector } from "./../reducers";

function* getProduct() {
  const result = yield call(service.products);
  if (result.status === 200) {
    yield put(actions.getProductsSuccess(result.data.message));
  }
}
function* addViews(action) {
  const { id, token } = action.payload;
  const result = yield call(service.addView, id, token);
  if (result.status === 200) {
    yield put(actions.addViewSuccess(result.data.message));
  }
}
function* getMyProducts(action) {
  const { user } = action;
  const result = yield call(service.getMyProducts, user);
  if (result.status === 200) {
    yield put(actions.getMyProductsSuccess(result.data.message));
  }
}
function* addToStore(action) {
  const { id, token } = action.payload;
  const result = yield call(service.addToStore, id, token);
  if (result.status === 200) {
    yield put(actions.addToStoreSuccess(result.data.data));
  }
}
function* addProduct(action) {
  let { role } = yield select(authSelector);
  const { product, token } = action.payload;
  const result = yield call(service.addProduct, product, token);
  if (result.status === 201) {
    yield put(actions.addProductSuccess(result.data.data));
  }
  if (role === "admin") {
    yield put(push("/admin/products"));
  } else if (role === "vendor") {
    yield put(push("/vendor/products"));
  }
}
function* deleteProduct(action) {
  const { id, token } = action.payload;
  const result = yield call(service.deleteProduct, id, token);
  if (result.status === 200) {
    yield put(actions.deleteProductSuccess(id));
  }
}
function* updateProduct(action) {
  let { role } = yield select(authSelector);
  const { _id, product, token } = action.payload;
  const data = { _id, product };
  const result = yield call(service.updateProduct, _id, product, token);
  if (result.status === 200) {
    yield put(actions.updateProductSuccess(data));
  }
  if (role === "admin") {
    yield put(push("/admin/products"));
  } else if (role === "vendor") {
    yield put(push("/vendor/products"));
  }
}

export default function* productWatcher() {
  yield takeLatest(types.GET_PRODUCTS, getProduct);
  yield takeLatest(types.ADD_PRODUCT, addProduct);
  yield takeLatest(types.DELETE_PRODUCT, deleteProduct);
  yield takeLatest(types.UPDATE_PRODUCT, updateProduct);
  yield takeLatest(types.GET_MY_PRODUCT, getMyProducts);
  yield takeLatest(types.ADD_TO_STORE, addToStore);
  yield takeLatest(types.ADD_PRODUCT_VIEW, addViews);
}
