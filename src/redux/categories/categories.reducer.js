import { CAT } from './categories';

const INITIAL_STATE = {
  categoriesList: CAT,
  isLoading: false,
  errorMessage: undefined,
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_CATEGORIES_START':
      return {
        ...state,
        isLoading: true,
      };
    case 'FETCH_CATEGORIES_SUCCESSFUL':
      return {
        ...state,
        isLoading: false,
        categoriesList: action.payload,
      };
    case 'FETCH_CATEGORIES_FAIL':
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
