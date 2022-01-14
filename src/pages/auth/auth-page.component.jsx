import React, { useState, useContext, useEffect } from 'react'

import { AuthProvider } from './auth.context'

import SignIn from './sign-in.component'

const AuthPage = () => {
 
  return (
    <AuthProvider>
      <SignIn />
    </AuthProvider>
  )
}

export default AuthPage