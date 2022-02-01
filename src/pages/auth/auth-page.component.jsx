import React from 'react'

import { AuthProvider } from './auth.context'

import SignIn from './sign-in.component'
import SignUp from './sign-up.component'

const AuthPage = () => {
  return (
    <AuthProvider>
      <SignIn />
      <SignUp />
    </AuthProvider>
  )
}

export default AuthPage