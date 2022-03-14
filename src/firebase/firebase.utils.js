import { initializeApp } from 'firebase/app'
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider, 
  ProviderId
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA_H8EFDVf5Wk0yBt56YmTQ4Hrzc0pQwRc",
  authDomain: "crwn-clothing-db-c22e1.firebaseapp.com",
  projectId: "crwn-clothing-db-c22e1",
  storageBucket: "crwn-clothing-db-c22e1.appspot.com",
  messagingSenderId: "682807040792",
  appId: "1:682807040792:web:a985a9d15523b522285c6d",
  measurementId: "G-1D29PYQRBG"
}

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  if (!userAuth) return

  const uid = userAuth.uid;
  const userDocRef = doc(db, 'users', uid)
  const userSnapshot = await getDoc(userDocRef)
  const exists = userSnapshot.exists()

  if (!exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log('error createing the user ', error.message)
    }
  }

  return userDocRef
}