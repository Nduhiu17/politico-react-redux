import thunk from "redux-thunk";
import {applyMiddleware, compose, createStore} from "redux";


const initialState = {};

const middleware = [thunk];

const store = createStore(
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;

