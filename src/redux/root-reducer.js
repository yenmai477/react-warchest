import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { loadingBarReducer } from "react-redux-loading-bar";
import userReducer from "./user/user.reducer";
import productReducer from "./product/product.reducer";
import noficationReducer from "./nofication/nofication.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  // Reducers here

  user: userReducer,
  product: productReducer,
  loadingBar: loadingBarReducer,
  nofication: noficationReducer,
});

export default persistReducer(persistConfig, rootReducer);
