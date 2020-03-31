import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "./../types/article";
import * as service from "./../services/article";
import * as actions from "./../actions/articleActions";
import { push } from "react-router-redux";

//Get Articles
function* getArticles() {
  const result = yield call(service.articles);
  if (result.status === 200) {
    yield put(actions.getArticlesSuccess(result.data.message));
  }
}

function* publishArticle(action) {
  const { id, token } = action.payload;
  const result = yield call(service.publishArticle, id, token);
  if (result.status === 200) {
    yield put(actions.publishArticleSuccess(result.data.data));
  }
}

function* getMyArticles(action) {
  const { user } = action;
  const result = yield call(service.getMyArticles, user);
  if (result.status === 200) {
    yield put(actions.getMyArticlesSuccess(result.data.message));
  }
}
//Delete Articles

function* deleteArticle(action) {
  const { id, token } = action.payload;
  const result = yield call(service.deleteArticle, id, token);
  if (result.status === 200) {
    yield put(actions.deleteArticleSuccess(id));
  }
}
//AddArtcle Views
function* addArticleViews(action) {
  const { id, token } = action.payload;
  const result = yield call(service.addView, id, token);
  if (result.status === 200) {
    yield put(actions.addViewSuccess(result.data.message));
  }
}

export default function* articleWatcher() {
  yield takeLatest(types.GET_ARTICLES, getArticles);
  yield takeLatest(types.GET_MY_ARTICLES, getMyArticles);
  yield takeLatest(types.ADD_ARTICLE_VIEW, addArticleViews);
  yield takeLatest(types.DELETE_ARTICLE, deleteArticle);
  yield takeLatest(types.PUBLISH_ARTICLE, publishArticle);
}
