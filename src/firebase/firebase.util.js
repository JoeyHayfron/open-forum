import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyASSg-cx-Jl2XT6d6ITUYvlwyMiqcLgPAw',
  authDomain: 'open-forum-d6234.firebaseapp.com',
  databaseURL: 'https://open-forum-d6234.firebaseio.com',
  projectId: 'open-forum-d6234',
  storageBucket: 'open-forum-d6234.appspot.com',
  messagingSenderId: '866213961255',
  appId: '1:866213961255:web:86317bbc6bb477c775f802',
  measurementId: 'G-YR2L0GKVG6',
};

firebase.initializeApp(firebaseConfig);

export const createUserDocument = async (userAuth, otherRelevantData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const userSnapshot = userRef.get();

  if (!userSnapshot.exist) {
    const { name, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        name,
        email,
        createdAt,
        ...otherRelevantData,
      });
    } catch (err) {
      console.log('An error occured', err.message);
    }
  }
  return userRef;
};

// export const saveCategories = async (catItem) => {
//   firestore
//     .collection('categories')
//     .get()
//     .then((snapshot) => {
//       snapshot.forEach((doc) => {
//         if (doc.data().title === catItem.title) {
//           console.log('This category already exists');
//           return;
//         }
//       });
//     })
//     .catch((err) => {
//       console.log('An error occured', err.message);
//     });

//   const category = await firestore.collections('categories').add(catItem);
//   return category;
// };

export const auth = firebase.auth();
export const firestore = firebase.firestore();
