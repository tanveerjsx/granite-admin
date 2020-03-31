import * as types from "./../types/product";

const initialState = {
  products: []
};

const productReducers = (state = initialState, actions) => {
  switch (actions.type) {
    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: actions.products
      };
    case types.ADD_TO_STORE_SUCCESS: {
      const products = [...state.products];
      const index = products.findIndex(e => e._id === actions.data._id);
      products[index].isPublish = actions.data.isPublish;
      return { ...state, products };
    }
    case types.ADD_PRODUCT_VIEW_SUCCESS: {
      const products = [...state.products];
      const index = products.findIndex(e => e._id === actions.data._id);
      products[index].views = actions.data.views;
      return { ...state, products };
    }
    case types.GET_MY_PRODUCT_SUCCESS:
      return {
        ...state,
        products: actions.products
      };

    case types.DELETE_PRODUCT_SUCCESS: {
      let products = [...state.products];
      products = products.filter(e => e._id !== actions.id);
      return (state = {
        ...state,
        products
      });
    }

    case types.ADD_PRODUCT_SUCCESS: {
      const products = [...state.products, actions.data];
      return {
        ...state,
        products
      };
    }
    case types.UPDATE_PRODUCT_SUCCESS:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default productReducers;
