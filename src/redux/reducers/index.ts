import { combineReducers } from "redux";

import productReducer from "./ProductReducer";
import cartReducer from "./CartReducer";
import uiReducer from "./UiReducer";
import categoryReducer from "./CategoryReducer";
import userReducer from "./UserReducer";

const rootReducer = () =>
  combineReducers({
    productReducer,
    cartReducer,
    categoryReducer,
    uiReducer,
    userReducer,
  });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
