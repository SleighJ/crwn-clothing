import React from 'react'
import { AuthProvider } from '../../contexts/auth/auth.context'
import SignInForm from '../../forms/sign-in/sign-in-form.component'
import SignUpForm from '../../forms/sign-up/sign-up-form.component'
import './authentication.styles.scss'

const SignIn = () => {
  return (
    <div className='authentication'>
      <AuthProvider>
        <SignInForm />
        <SignUpForm />
      </AuthProvider>
    </div>
  )
}

export default SignIn