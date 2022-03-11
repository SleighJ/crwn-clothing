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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;