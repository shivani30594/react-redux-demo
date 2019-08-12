import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "../reducers/index";

const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
}

const createStoreWithMiddleware = applyMiddleware(logger, reduxThunk)(createStore);

const store = createStoreWithMiddleware(rootReducer);

export default store;