import { createSelector } from 'reselect';

export const selectPosts = (state) => state.posts;

export const selectPosts2 = createSelector(
  [selectPosts],

  (posts) => posts.postsList
);

export const selectPostLoading = createSelector(
  [selectPosts],

  (posts) => posts.postsLoading
)

export const postFetchingDone = createSelector(
  [selectPosts],

  (posts) => !!posts.postsList
)

export const selectPostsList = (categoryName) =>
  createSelector(
    [selectPosts2],

    (postsList) => postsList.filter((item) => item.category === categoryName)
  );
