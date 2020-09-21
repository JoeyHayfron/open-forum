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

export const categoryExists = async (category) => {
  try {
    const catRef = firestore.collection('categories');
    const snapshot = await catRef.get();
    const exists = snapshot.docs.find(function (doc, index) {
      if (doc.data().title === category.title) {
        console.log(index);
        return true;
      }
    });
    return exists;
  } catch (err) {
    console.log(err.message);
  }
};

export const addCategory = (category) => {
  return async (dispatch) => {
    const hasCategory = await categoryExists(category);
    var catAdded = '';
    if (typeof hasCategory === 'undefined') {
      const catRef = firestore.collection('categories');
      catAdded = await catRef.add(category);
      return !!catAdded;
    } else {
      return !!catAdded;
    }
  };
};
