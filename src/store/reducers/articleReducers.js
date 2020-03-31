import * as types from "../types/article";
const initialState = {
  articles: []
};

const articleReducers = (state = initialState, actions) => {
  switch (actions.type) {
    case types.GET_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: actions.articles
      };

    case types.DELETE_ARTICLE_SUCCESS: {
      let articles = [...state.articles];
      articles = articles.filter(e => e._id !== actions.id);
      return (state = {
        ...state,
        articles
      });
    }

    case types.PUBLISH_ARTICLE_SUCCESS: {
      const articles = [...state.articles];
      const index = articles.findIndex(e => e._id === actions.data._id);
      articles[index].isPublished = actions.data.isPublished;
      return { ...state, articles };
    }

    case types.ADD_ARTICLE_VIEW_SUCCESS: {
      const articles = [...state.articles];
      const index = articles.findIndex(e => e._id === actions.data._id);
      articles[index].views = actions.data.views;
      return { ...state, articles };
    }

    case types.GET_MY_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: actions.articles
      };

    default:
      return state;
  }
};

export default articleReducers;
