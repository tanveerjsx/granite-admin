import * as types from "./../types/category";

export const getCategories = () => {
  return {
    type: types.GET_CATEGORIES
  };
};

export const getCategoriesSuccess = data => {
  return {
    type: types.GET_CATEGORIES_SUCCESS,
    categories: data
  };
};
export const addCategory = (category, user, token) => {
  return {
    type: types.ADD_CATEGORY,
    payload: { category, user, token }
  };
};
export const addCategorySuccess = data => {
  return {
    type: types.ADD_CATEGORY_SUCCESS,
    data
  };
};

export const deleteCategory = (id, token) => {
  return {
    type: types.DELETE_CATEGORY,
    payload: { id, token }
  };
};
export const deleteCategorySuccess = id => {
  return {
    type: types.DELETE_CATEGORY_SUCCESS,
    payload: id
  };
};

export const updateCategory = (_id, category, token) => {
  return {
    type: types.UPDATE_CATEGORY,
    payload: { _id, category, token }
  };
};
export const updateCategorySuccess = data => {
  return {
    type: types.UPDATE_CATEGORY_SUCCESS,
    data
  };
};
