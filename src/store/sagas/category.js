import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "./../types/category";
import * as service from "./../services/category";
import * as actions from "./../actions/categoryActions";
import { push } from "react-router-redux";

function* getCategories() {
  const result = yield call(service.categories);
  if (result.status === 200) {
    yield put(actions.getCategoriesSuccess(result.data.message));
  }
}
function* addCategory(action) {
  const { category, user, token } = action.payload;
  const categories = { name: category.name, createdBy: user };
  const result = yield call(service.addCategory, categories, token);
  if (result.status === 201) {
    yield put(actions.addCategorySuccess(result.data.message));
  }
  yield put(push("/admin/categories"));
}
function* deleteCategory(action) {
  const { id, token } = action.payload;
  const result = yield call(service.deleteCategory, id, token);
  if (result.status === 200) {
    yield put(actions.deleteCategorySuccess(id));
  }
}
function* updateCategory(action) {
  const { _id, category, token } = action.payload;
  const data = { _id, category };
  const result = yield call(service.updateCategory, _id, category, token);
  if (result.status === 200) {
    yield put(actions.updateCategorySuccess(data));
  }
  yield put(push("/admin/categories"));
}

export default function* categoryWatcher() {
  yield takeLatest(types.ADD_CATEGORY, addCategory);
  yield takeLatest(types.GET_CATEGORIES, getCategories);
  yield takeLatest(types.DELETE_CATEGORY, deleteCategory);
  yield takeLatest(types.UPDATE_CATEGORY, updateCategory);
}
