import POSTS from './posts';

const INITIAL_STATE = {
  postList: POSTS,
};

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default postReducer;
