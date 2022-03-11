import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyA_H8EFDVf5Wk0yBt56YmTQ4Hrzc0pQwRc",
  authDomain: "crwn-clothing-db-c22e1.firebaseapp.com",
  projectId: "crwn-clothing-db-c22e1",
  storageBucket: "crwn-clothing-db-c22e1.appspot.com",
  messagingSenderId: "682807040792",
  appId: "1:682807040792:web:a985a9d15523b522285c6d",
  measurementId: "G-1D29PYQRBG"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  const exists = snapShot.exists

  if (exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error)
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;