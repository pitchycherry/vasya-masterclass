import { composeWithDevTools } from "redux-devtools-extension";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware, connectRouter } from "connected-react-router";
import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

export const history = createHistory();

const sagaMiddleware = createSagaMiddleware();
const reduxRouterMiddleware = routerMiddleware(history);
const initialState = {};

const middleware = [reduxRouterMiddleware, sagaMiddleware];

const store = createStore(
  combineReducers({
    ...rootReducer,
    router: connectRouter(history)
  }),
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);

window.store = store;
export default store;
