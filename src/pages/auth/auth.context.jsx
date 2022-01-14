import React, { createContext, useState } from 'react'

export const AuthContext = createContext({
  user: 'Jar Jar',
  password: 'Meesa Hungry',
  setUser: () => {},
  setPassword: () => {}
})

const ContextProvider = ({children}) => {
  console.log('hey')
  return (
    <AuthContext.Provider>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthContext