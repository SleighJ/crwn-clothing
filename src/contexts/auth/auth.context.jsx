import React, { useState, useContext, createContext } from 'react'
import { createAuthUserWithEmailAndPassword } from '../../firebase/firebase.utils'

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
  const {
    displayName,
    email,
    password,
    confirmPassword
  } = formFields

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value })
  }

  //TODO
  const handleSubmit = async (event) => {
    event.preventDefault();
    // if password matches confirmPassword, there is a display name and there is a valid email
    createAuthUserWithEmailAndPassword(email, password)
  }

  return (
    <AuthContext.Provider 
      value={{ 
        handleChange,
        displayName,
        email,
        password,
        confirmPassword
      }}
    >
        { children }
    </AuthContext.Provider>
  )
}
