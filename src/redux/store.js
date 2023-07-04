import { applyMiddleware, compose } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";
import { legacy_createStore as createStore } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
