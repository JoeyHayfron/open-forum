import { createSelector } from 'reselect';

export const selectCategories = (state) => state.categories;

export const selectCategoriesList = createSelector(
  [selectCategories],

  (categories) => categories.categoriesList
);

export const selectCategoryLoading = createSelector(
  [selectCategories],

  (categories) => categories.isLoading
);

export const selectCategoryFetching = createSelector(
  [selectCategories],

  (categories) => !!categories.categoriesList
);
