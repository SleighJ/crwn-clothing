import React, { useState, useContext, createContext } from 'react'
import { 
  createAuthUserWithEmailAndPassword, 
  createUserDocumentFromAuth 
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

  // Google O-auth
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value })
  }

  // Firebase sign up with email and password
  const handleSubmit = async (event) => {
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

  return (
    <AuthContext.Provider 
      value={{ 
        handleChange,
        handleSubmit,
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
