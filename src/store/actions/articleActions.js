import * as types from "../types/article";

export const getArticle = () => {
  return {
    type: types.GET_ARTICLES
  };
};
export const getArticlesSuccess = articles => {
  return {
    type: types.GET_ARTICLES_SUCCESS,
    articles
  };
};

export const deleteArticle = (id, token) => {
  return {
    type: types.DELETE_ARTICLE,
    payload: { id, token }
  };
};
export const deleteArticleSuccess = id => {
  return {
    type: types.DELETE_ARTICLE_SUCCESS,
    id
  };
};

export const publishArticle = (id, token) => {
  return {
    type: types.PUBLISH_ARTICLE,
    payload: { id, token }
  };
};
export const publishArticleSuccess = data => {
  return {
    type: types.PUBLISH_ARTICLE_SUCCESS,
    data
  };
};

export const addView = (id, token) => {
  return {
    type: types.ADD_ARTICLE_VIEW,
    payload: { id, token }
  };
};

export const addViewSuccess = data => {
  return {
    type: types.ADD_ARTICLE_VIEW_SUCCESS,
    data
  };
};

export const getMyArticle = user => {
  return {
    type: types.GET_MY_ARTICLES,
    user
  };
};
export const getMyArticlesSuccess = articles => {
  return {
    type: types.GET_MY_ARTICLES_SUCCESS,
    articles
  };
};
