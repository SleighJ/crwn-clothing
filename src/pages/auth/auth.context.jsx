import React, { useState, useContext, createContext } from 'react'

const AuthContext = createContext()
const AuthUpdateContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function useAuthUpdate() {
  return useContext(AuthUpdateContext)
}

export function AuthProvider({ children }) {
  const [ userName, setUserName ] = useState('jar jar')

  const updateUserName = () => {
    setUserName('jj')
  }

  console.log(userName)

  return (
    <AuthContext.Provider value={userName}>
      <AuthUpdateContext.Provider value={updateUserName}>
        { children }
      </AuthUpdateContext.Provider>
    </AuthContext.Provider>
  )
}

// import React, { createContext, useState } from 'react'

// export const AuthContext = createContext({
//   user: 'Jar Jar',
//   password: 'Meesa Hungry',
//   setUser: () => {},
//   setPassword: () => {}
// })

// const ContextProvider = ({children}) => {
//   return (
//     <AuthContext.Provider>
//       { children }
//     </AuthContext.Provider>
//   )
// }

// export default AuthContext