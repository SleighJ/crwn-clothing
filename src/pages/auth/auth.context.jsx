import React, { useState, useContext, createContext } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [ userEmail, setUserEmail ] = useState('')
  const [ userPassword, setUserPassword ] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setUserEmail('')
    setUserPassword('')
  }
  
  return (
    <AuthContext.Provider 
      value={{ 
        userEmail,
        setUserEmail,
        userPassword, 
        setUserPassword,
        handleSubmit
      }}
    >
        { children }
    </AuthContext.Provider>
  )
}
