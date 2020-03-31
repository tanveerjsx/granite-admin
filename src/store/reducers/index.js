import { combineReducers } from "redux";
import authReducers from "./authReducers";
import productReducers from "./productReducers";
import categoryReducers from "./categoryReducers";
import userReducer from "./userReducers";
import couponReducer from "./couponReducers";
import articleReducer from "./articleReducers";
import orderReducer from "./orderReducers";
import { routerReducer } from "react-router-redux";

export const authSelector = state => {
  return state.auth;
};

export const rootReducers = combineReducers({
  auth: authReducers,
  product: productReducers,
  category: categoryReducers,
  user: userReducer,
  routing: routerReducer,
  coupon: couponReducer,
  article: articleReducer,
  order: orderReducer
});
