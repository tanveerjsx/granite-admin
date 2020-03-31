import * as types from "./../types/product";

export const getProducts = () => {
  return {
    type: types.GET_PRODUCTS
  };
};
export const getProductsSuccess = data => {
  return {
    type: types.GET_PRODUCTS_SUCCESS,
    products: data
  };
};
export const getMyProducts = user => {
  return {
    type: types.GET_MY_PRODUCT,
    user
  };
};
export const getMyProductsSuccess = products => {
  return {
    type: types.GET_MY_PRODUCT_SUCCESS,
    products
  };
};

export const addView = (id, token) => {
  return {
    type: types.ADD_PRODUCT_VIEW,
    payload: { id, token }
  };
};

export const addViewSuccess = data => {
  return {
    type: types.ADD_PRODUCT_VIEW_SUCCESS,
    data
  };
};
export const addToStore = (id, token) => {
  return {
    type: types.ADD_TO_STORE,
    payload: { id, token }
  };
};
export const addToStoreSuccess = data => {
  return {
    type: types.ADD_TO_STORE_SUCCESS,
    data
  };
};
export const deleteProduct = (id, token) => {
  return {
    type: types.DELETE_PRODUCT,
    payload: { id, token }
  };
};
export const deleteProductSuccess = id => {
  return {
    type: types.DELETE_PRODUCT_SUCCESS,
    id
  };
};

export const addProduct = (product, token) => {
  return {
    type: types.ADD_PRODUCT,
    payload: { product, token }
  };
};
export const addProductSuccess = data => {
  return {
    type: types.ADD_PRODUCT_SUCCESS,
    data
  };
};

export const updateProduct = (_id, product, token) => {
  return {
    type: types.UPDATE_PRODUCT,
    payload: { _id, product, token }
  };
};
export const updateProductSuccess = data => {
  return {
    type: types.UPDATE_PRODUCT_SUCCESS,
    data
  };
};
