import React, { useState, useContext, useEffect } from 'react'

import { AuthContext } from './auth.context'

import SignIn from './sign-in.component'

const AuthPage = () => {
  const context = useContext(AuthContext)
  const { user, setUser } = context;


  setUser('YOLOOOO')

  useEffect(() => {
    console.log(user)
  }, [user])

  console.log(context)
  return (
    <SignIn value={context} />
  )

}

export default AuthPage