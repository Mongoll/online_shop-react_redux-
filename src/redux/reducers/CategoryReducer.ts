import {
  CategoriesState,
  FETCH_CATEGORIES_LOADING,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_SUCCESS,
  CategoryActions,
} from "../../types";

const initState: CategoriesState = {
  categories: [],
  isLoading: false,
  error: "",
};

export default function productsReducer(
  state: CategoriesState = initState,
  actions: CategoryActions
) {
  switch (actions.type) {
    // fetch country, loading true
    case FETCH_CATEGORIES_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    //if fetching is successful
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categories: actions.payload,
        error: "",
      };
    //if fetching has any errors
    case FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: actions.payload,
      };
    default:
      return state;
  }
}
