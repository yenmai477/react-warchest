import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import countReducer from "./count/count.reducer";
import { loadingBarReducer } from "react-redux-loading-bar";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  // Reducers here
  count: countReducer,
  loadingBar: loadingBarReducer,
});

export default persistReducer(persistConfig, rootReducer);
