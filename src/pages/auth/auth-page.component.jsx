import React from 'react'

import { AuthProvider } from '../../contexts/auth/auth.context'

import SignIn from './sign-in.component'

const AuthPage = () => {
  return (
    <AuthProvider>
      <SignIn />
    </AuthProvider>
  )
}

export default AuthPage