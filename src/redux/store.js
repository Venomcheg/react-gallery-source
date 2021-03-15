import {createStore, combineReducers, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import usersReducer from "./reducers/usersReducer";
import albumsReducer from "./reducers/albumsReducer";
import photosReducer from "./reducers/photosReducer";
import paginationReducer from "./reducers/paginationReducer";
const initialState = {}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers({
  usersReducer,
  albumsReducer,
  photosReducer,
  paginationReducer
}),
initialState,
  composeEnhancers(applyMiddleware(thunk))
)
export default store