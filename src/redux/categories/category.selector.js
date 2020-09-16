import { createSelector } from 'reselect';

export const selectCategories = (state) => state.categories;

export const selectCategoriesList = createSelector(
  [selectCategories],

  (categories) => categories.categoriesList
);
