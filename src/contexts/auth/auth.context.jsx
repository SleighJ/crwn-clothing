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
    // if password matches confirmPassword, there is a display name and there is a valid email
    try {
      const createdUser = await createAuthUserWithEmailAndPassword(email, password)
      console.log('createdUser ', createdUser)
      return createdUser
    } catch (error) {
      console.log('error creating user ', error)
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
        confirmPassword
      }}
    >
        { children }
    </AuthContext.Provider>
  )
}
