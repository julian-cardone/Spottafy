import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import usersReducer from "./users";
import sessionReducer from "./session";
import albumsReducer from "./albums";
import artistsReducer from "./artists";
import playlistsReducer from "./playlist";

export const rootReducer = combineReducers({
  users: usersReducer,
  session: sessionReducer,
  albums: albumsReducer,
  artists: artistsReducer,
  playlists: playlistsReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
