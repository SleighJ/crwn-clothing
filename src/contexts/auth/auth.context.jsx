import React, { useState, useContext, createContext } from 'react'
import { 
  createAuthUserWithEmailAndPassword, 
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword
} from '../../firebase/firebase.utils'

const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export const AuthProvider = ({ children }) => {
  const [ formFields, setFormFields ] = useState(defaultFormFields)
  const [ error, setError ] = useState(null)
  const {
    displayName,
    email,
    password,
    confirmPassword
  } = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const resetErrorState = () => {
    setError(null)
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmitNewUser = async (event) => {
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email, 
        password
      )
      await createUserDocumentFromAuth(user, { displayName })
      resetFormFields()
      resetErrorState()
    } catch (error) {
      console.error('error creating user ', error)
      setError(error.code)
    }
  }

  const handleSubmitSignIn = async (event) => {
    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email, 
        password
      )
      console.log(response)
      resetFormFields()
      resetErrorState()
    } catch (error) {
      console.error('error creating user ', error)
      setError(error.code)
    }
  }

  return (
    <AuthContext.Provider 
      value={{ 
        handleChange,
        handleSubmitNewUser,
        handleSubmitSignIn,
        displayName,
        email,
        password,
        confirmPassword,
        setError,
        error
      }}
    >
        { children }
    </AuthContext.Provider>
  )
}
