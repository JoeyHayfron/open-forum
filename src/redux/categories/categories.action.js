import {firestore} from '../../firebase/firebase.util';

export const fetchCategoriesStart = () => ({
  type: 'FETCH_CATEGORIES_START',
});

export const fetchCategoriesSUccessful = (categories) => ({
  type: 'FETCH_CATEGORIES_SUCCESSFUL',
  payload: categories,
});

export const fetchCategoriesFail = (errorMessage) => ({
  type: 'FETCH_CATEGORIES_FAIL',
  payload: errrorMessage,
});

export const 

 
export const addCategories = 