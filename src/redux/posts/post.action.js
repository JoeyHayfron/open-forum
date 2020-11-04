import { firestore } from '../../firebase/firebase.util';


export const fetchPostsStart = () => ({
  type: 'FETCH_POSTS_START',
});

export const fetchPostSuccessful = (posts) => ({
  type: 'FETCH_POSTS_SUCCESSFUL',
  payload: posts,
});

export const fetchPostsFailed = (errorMessage) => ({
  type: 'FETCH_POSTS_FAILED',
  payload: errorMessage,
});

export const fetchPostsAsync = () => {
  return (dispatch) => {
    const postRef = firestore.collection('posts');
    dispatch(fetchPostsStart());

    const postList = [];
    postRef.get().then((snapshot) => {
      snapshot.forEach((doc => postList.push(doc.data())));
       dispatch(fetchPostSuccessful(postList))
      }).catch(error => dispatch(fetchPostsFailed(error.message)));
    
  }
}

export const createPost = async (post) => {
  var postSuccessful = undefined;
  const postRef = firestore.collection('posts');
  postSuccessful = await postRef.add(post);
  return !!postSuccessful;
}