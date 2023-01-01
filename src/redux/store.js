import { rootReducer } from './reducers/rootReducers'

import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";


const reducer = combineReducers({
    rootReducer: rootReducer
})


const middleware = [thunk];
let initialState = 0
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;