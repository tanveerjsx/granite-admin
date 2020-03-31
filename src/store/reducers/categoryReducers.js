import * as types from "./../types/category";
const initialState = {
  categories: []
};

const categoryReducers = (state = initialState, actions) => {
  switch (actions.type) {
    case types.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: actions.categories
      };
    case types.ADD_CATEGORY_SUCCESS:
      let tempCategory = [...state.categories, actions.data];
      return {
        ...state,
        categories: tempCategory
      };
    case types.DELETE_CATEGORY_SUCCESS:
      let categories = [...state.categories];
      categories = categories.filter(c => c._id !== actions.payload);
      return {
        ...state,
        categories
      };
    case types.UPDATE_CATEGORY_SUCCESS: {
      let categories = [...state.categories];
      let index = categories.findIndex(e => e._id === actions.data._id);
      categories[index].name = actions.data.category.name;
      return { ...state, categories };
    }

    default:
      return state;
  }
};

export default categoryReducers;
