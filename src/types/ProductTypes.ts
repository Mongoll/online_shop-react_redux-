//reducer case constants
export const FETCH_PRODUCTS_LOADING = "FETCH_PRODUCTS_LOADING";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

//types
export type ProductsState = {
  products: Product[];
  product: Product;
  isLoading: boolean;
  error: string;
};
//product state
export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    image: string;
  };
  images: string[];
};

export const productDefaultValue: Product = {
  id: 0,
  title: "",
  price: 0,
  description: "",
  category: {
    id: 0,
    name: "",
    image: "",
  },
  images: [],
};

//action types
export type FetchAllProductsLoadingAction = {
  type: typeof FETCH_PRODUCTS_LOADING;
  payload?: string;
};
export type FetchAllProductsSuccessAction = {
  type: typeof FETCH_PRODUCTS_SUCCESS;
  payload: ProductsState[];
};
export type FetchOneProductSuccessAction = {
  type: typeof FETCH_PRODUCT_SUCCESS;
  payload: ProductsState;
};

export type FetchCategoryProductsSuccesAction = {
  type: typeof FETCH_PRODUCTS_SUCCESS;
  payload: ProductsState[];
};
export type FetchAllProductsFailureAction = {
  type: typeof FETCH_PRODUCTS_FAILURE;
  payload: string;
};

export type ProductActions =
  | FetchAllProductsLoadingAction
  | FetchAllProductsSuccessAction
  | FetchOneProductSuccessAction
  | FetchCategoryProductsSuccesAction
  | FetchAllProductsFailureAction;
