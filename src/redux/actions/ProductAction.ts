import { Dispatch } from "redux";
import axios from "axios";

import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCT_SUCCESS,
  ProductActions,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_LOADING,
  ProductsState,
} from "../../types";

//fetch all products
export function fetchAllProductsLoading(): ProductActions {
  return {
    type: FETCH_PRODUCTS_LOADING,
  };
}

// fetch all products success
export function fetchAllProductsSuccess(
  products: ProductsState[]
): ProductActions {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
  };
}

// fetch all products success
export function fetchOneProductSuccess(product: ProductsState): ProductActions {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: product,
  };
}

export function fetchCategoryProductsSuccess(
  product: ProductsState[]
): ProductActions {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: product,
  };
}

// fetch all products failure
export function fetchAllProductsFailure(error: string): ProductActions {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
  };
}

// fetch products data

export function fetchAllProducts() {
  return function (dispatch: Dispatch) {
    dispatch(fetchAllProductsLoading());
    //axios call
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => {
        const products = res.data as ProductsState[];
        dispatch(fetchAllProductsSuccess(products));
      })
      .catch((err) => {
        dispatch(fetchAllProductsFailure(err));
      });
  };
}

export function fetchOneProduct(id: number) {
  return function (dispatch: Dispatch) {
    dispatch(fetchAllProductsLoading());
    //axios call
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => {
        const product = res.data as ProductsState;
        dispatch(fetchOneProductSuccess(product));
      })
      .catch((err) => {
        dispatch(fetchAllProductsFailure(err));
      });
  };
}

export function fetchCategoryProducts(id: number) {
  return function (dispatch: Dispatch) {
    dispatch(fetchAllProductsLoading());
    //axios call
    axios
      .get(`https://api.escuelajs.co/api/v1/categories/${id}/products`)
      .then((res) => {
        const products = res.data as ProductsState[];
        dispatch(fetchCategoryProductsSuccess(products));
      })
      .catch((err) => {
        dispatch(fetchAllProductsFailure(err));
      });
  };
}
