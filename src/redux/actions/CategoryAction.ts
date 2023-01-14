import { Dispatch } from "redux";
import axios from "axios";

import {
  FETCH_CATEGORIES_SUCCESS,
  CategoryActions,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_LOADING,
  CategoriesState,
} from "../../types";

//fetch all products
export function fetchAllCategoriesLoading(): CategoryActions {
  return {
    type: FETCH_CATEGORIES_LOADING,
  };
}

// fetch all products success
export function fetchAllCategoriesSuccess(
  categories: CategoriesState[]
): CategoryActions {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    payload: categories,
  };
}

// fetch all products failure
export function fetchAllCategoriesFailure(error: string): CategoryActions {
  return {
    type: FETCH_CATEGORIES_FAILURE,
    payload: error,
  };
}

// fetch products data

export function fetchAllCategories() {
  return function (dispatch: Dispatch) {
    dispatch(fetchAllCategoriesLoading());
    //axios call
    axios
      .get("https://api.escuelajs.co/api/v1/categories")
      .then((res) => {
        const products = res.data as CategoriesState[];
        dispatch(fetchAllCategoriesSuccess(products));
      })
      .catch((err) => {
        dispatch(fetchAllCategoriesFailure(err));
      });
  };
}
