import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  CartProduct,
  CartActions,
  Product,
  SET_QUANTITY_TO_CART,
} from "../../types";

//Add a producr to cart
export function addProductToCart(
  product: Product,
  quantity: number,
  uId: number
): CartActions {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: {
      prod_id: product.id,
      title: product.title,
      quantity: quantity,
      price: product.price,
      img: product.images,
      user_id: uId,
    },
  };
}

// remove a product from the cart
export function removeProductFromCart(product: CartProduct): CartActions {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    payload: product,
  };
}

export function setQuantityToCart(
  product: CartProduct,
  count: number,
  uId: number
): CartActions {
  return {
    type: SET_QUANTITY_TO_CART,
    payload: {
      prod_id: product.prod_id,
      title: product.title,
      quantity: count,
      price: product.price,
      img: product.img,
      user_id: uId,
    },
  };
}
