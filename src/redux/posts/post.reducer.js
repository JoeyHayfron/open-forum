const INITIAL_STATE = {
  postsList: [],
  postsLoading: false,
  errorMessage: undefined,
};

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_POSTS_START':
      return {
        ...state,
        postsLoading: true,
      };
    case 'FETCH_POSTS_SUCCESSFUL':
      return {
        ...state,
        postsLoading: false,
        postsList: action.payload,
      };
    case 'FETCH_POSTS_FAILED':
      return {
        ...state,
        postsLoading: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
