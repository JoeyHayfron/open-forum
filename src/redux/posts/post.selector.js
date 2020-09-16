import { createSelector } from 'reselect';

export const selectPosts = (state) => state.posts;

export const selectPosts2 = createSelector(
  [selectPosts],

  (posts) => posts.postList
);

export const selectPostsList = (categoryName) =>
  createSelector(
    [selectPosts2],

    (postList) => postList.filter((item) => item.category === categoryName)
  );
