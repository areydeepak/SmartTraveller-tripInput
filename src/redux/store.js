import { createStore, applyMiddleware, combineReducers } from "redux";

import thunk from "redux-thunk";
import tripReducer from "./reducers";

const rootReducer = combineReducers({ tripReducer });

// const rootReducer = tripReducer;

const Store = createStore(rootReducer, applyMiddleware(thunk));

export default Store;
