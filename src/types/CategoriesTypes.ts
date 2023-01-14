//reducer case constants
export const FETCH_CATEGORIES_LOADING = "FETCH_CATEGORIES_LOADING";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const FETCH_CATEGORIES_FAILURE = "FETCH_CATEGORIES_FAILURE";

//types
export type CategoriesState = {
  categories: Category[];
  isLoading: boolean;
  error: string;
};
//product state
export type Category = {
  id: number;
  name: string;
  image: string;
};

//action types
export type FetchAllCategoriesLoadingAction = {
  type: typeof FETCH_CATEGORIES_LOADING;
  payload?: string;
};
export type FetchAllCategoriesSuccessAction = {
  type: typeof FETCH_CATEGORIES_SUCCESS;
  payload: CategoriesState[];
};
export type FetchAllCategoriesFailureAction = {
  type: typeof FETCH_CATEGORIES_FAILURE;
  payload: string;
};

export type CategoryActions =
  | FetchAllCategoriesLoadingAction
  | FetchAllCategoriesSuccessAction
  | FetchAllCategoriesFailureAction;
