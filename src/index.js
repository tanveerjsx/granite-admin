/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import authWatcher from "./store/sagas/auth";
import productWatcher from "./store/sagas/product";
import categoryWatcher from "./store/sagas/category";
import couponWatcher from "./store/sagas/coupon";
import userWatcher from "./store/sagas/user";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import createSagaMiddleware from "redux-saga";
import { fork, all } from "redux-saga/effects";
import { rootReducers } from "./store/reducers";

import "react-toastify/dist/ReactToastify.css";
import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-dashboard-react.scss";
import { createBrowserHistory } from "history";
import { routerReducer, routerMiddleware } from "react-router-redux";
import App from "./App";
import articleWatcher from "./store/sagas/article";
import orderWatcher from "./store/sagas/order";
const history = createBrowserHistory();

function* rootSaga() {
  yield all([
    fork(productWatcher),
    fork(authWatcher),
    fork(categoryWatcher),
    fork(userWatcher),
    fork(couponWatcher),
    fork(articleWatcher),
    fork(orderWatcher)
  ]);
}

const persistConfig = {
  key: "root",
  storage
};
const sagaMiddleware = createSagaMiddleware();
let enhancer;
if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
    applyMiddleware(sagaMiddleware, routerMiddleware(history))
  );
} else {
  enhancer = compose(
    applyMiddleware(sagaMiddleware, routerMiddleware(history))
  );
}
const persistedReducer = persistReducer(persistConfig, rootReducers);
const store = createStore(persistedReducer, enhancer);
sagaMiddleware.run(rootSaga);
const persistor = persistStore(store);
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App appHistory={history} />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
