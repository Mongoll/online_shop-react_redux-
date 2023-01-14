import {
  ProductsState,
  FETCH_PRODUCTS_LOADING,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCT_SUCCESS,
  ProductActions,
  productDefaultValue,
} from "../../types";

const initiState: ProductsState = {
  products: [],
  product: productDefaultValue,
  isLoading: false,
  error: "",
};

export default function productsReducer(
  state: ProductsState = initiState,
  actions: ProductActions
) {
  switch (actions.type) {
    // fetch country, loading true
    case FETCH_PRODUCTS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    //if fetching is successful
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: actions.payload,
        error: "",
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        product: actions.payload,
        error: "",
      };
    //if fetching has any errors
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: actions.payload,
      };
    default:
      return state;
  }
}
