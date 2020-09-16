import { combineReducers } from 'redux';

import categoriesReducer from './categories/categories.reducer';
import postReducer from './posts/post.reducer';
import userReducer from './user/user.reducer';
import modalReducer from './modal/modal.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  posts: postReducer,
  modal: modalReducer,
});

export default rootReducer;
