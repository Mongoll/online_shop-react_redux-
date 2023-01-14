//reducer case constants
export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART";
export const SET_QUANTITY_TO_CART = "SET_QUANTITY_TO_CART";

export type CartProduct = {
  prod_id: number;
  title: string;
  quantity: number;
  price: number;
  img?: string[];
  user_id: number;
};

export type CartState = {
  cart: CartProduct[];
};

//action types
export type AddProductToCartAction = {
  type: typeof ADD_PRODUCT_TO_CART;
  payload: CartProduct;
};
export type RemoveProductFromCartAction = {
  type: typeof REMOVE_PRODUCT_FROM_CART;
  payload: CartProduct;
};
export type SetQuantityToCartAction = {
  type: typeof SET_QUANTITY_TO_CART;
  payload: CartProduct;
};
export type CartActions =
  | AddProductToCartAction
  | RemoveProductFromCartAction
  | SetQuantityToCartAction;
