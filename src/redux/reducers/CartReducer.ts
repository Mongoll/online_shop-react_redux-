import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  CartActions,
  CartState,
  SET_QUANTITY_TO_CART,
} from "../../types";
//initial state

const cartFromLocal = localStorage.getItem("cart");
let initialCart: [] = [];
if (cartFromLocal) {
  initialCart = JSON.parse(cartFromLocal);
}

const initState: CartState = {
  cart: initialCart,
};

//cart reducer function
export default function cartReducer(
  state: CartState = initState,
  action: CartActions
): CartState {
  let doesItemExist = false;
  switch (action.type) {
    //adding product to cart

    case ADD_PRODUCT_TO_CART: {
      doesItemExist = false;
      const product = action.payload;
      //save cart product to localstorag
      const tempProduct = state.cart.map((item) => {
        if (
          item.prod_id === product.prod_id &&
          item.user_id === product.user_id
        ) {
          item.quantity += 1;
          doesItemExist = true;
        }
        return item;
      });

      if (doesItemExist) {
        const cartProduct = [...tempProduct];
        localStorage.setItem("cart", JSON.stringify(cartProduct));
        return {
          ...state,
          cart: [...tempProduct],
        };
      }
      const cartItems = [...state.cart, product];
      localStorage.setItem("cart", JSON.stringify(cartItems));
      return {
        ...state,
        cart: [...state.cart, { ...product, quantity: 1 }],
      };
    }

    case REMOVE_PRODUCT_FROM_CART: {
      const paylodProduct = action.payload;
      const tempCart = state.cart.filter(
        (product) => product.prod_id !== paylodProduct.prod_id
      );
      //save cart product to localstorage
      const cartProduct = [...tempCart];
      localStorage.setItem("cart", JSON.stringify(cartProduct));
      return {
        ...state,
        cart: [...tempCart],
      };
    }

    case SET_QUANTITY_TO_CART: {
      const countProduct = action.payload;
      console.log(action.payload);
      //save cart product to localstorag
      const tempProduct = state.cart.map((item) => {
        if (
          item.prod_id === countProduct.prod_id &&
          item.user_id === countProduct.user_id
        ) {
          item.quantity = countProduct.quantity;
        }
        return item;
      });
      const cartProduct = [...tempProduct];
      localStorage.setItem("cart", JSON.stringify(cartProduct));
      return {
        ...state,
        cart: [...cartProduct],
      };
    }
    default:
      return state;
  }
}
