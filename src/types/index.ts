import { ProductsState } from "./ProductTypes";
import { CartState } from "./CartTypes";
import { UiReducerState } from "./UiTypes";
import { CategoriesState } from "./CategoriesTypes";
import { UserState } from "./UserTypes";

export * from "./ProductTypes";
export * from "./CartTypes";
export * from "./UiTypes";
export * from "./CategoriesTypes";
export * from "./UserTypes";

//global App state
export type AppState = {
  productReducer: ProductsState;
  cartReducer: CartState;
  uiReducer: UiReducerState;
  categoryReducer: CategoriesState;
  userReducer: UserState;
};
