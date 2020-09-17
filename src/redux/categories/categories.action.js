import { firestore } from '../../firebase/firebase.util';

export const fetchCategoriesStart = () => ({
  type: 'FETCH_CATEGORIES_START',
});

export const fetchCategoriesSuccessful = (categories) => ({
  type: 'FETCH_CATEGORIES_SUCCESSFUL',
  payload: categories,
});

export const fetchCategoriesFail = (errorMessage) => ({
  type: 'FETCH_CATEGORIES_FAIL',
  payload: errorMessage,
});

export const fetchCategoriesAsync = () => {
  return (dispatch) => {
    const categoriesRef = firestore.collection('categories');
    dispatch(fetchCategoriesStart());

    const catList = [];
    categoriesRef
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => catList.push(doc.data()));
        dispatch(fetchCategoriesSuccessful(catList));
      })
      .catch((err) => dispatch(fetchCategoriesFail(err.message)));
  };
};

export const addCategory = (category) => {
  return (dispatch) => {
    firestore
      .collection('categories')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          if (doc.data().title === category.title) {
            console.log('This category already exists');
            return;
          }
        });
      });

    firestore
      .collection('categories')
      .add(category)
      .then((category) => {
        console.log(category);
      })
      .catch((err) => console.log(err.message));
  };
};
