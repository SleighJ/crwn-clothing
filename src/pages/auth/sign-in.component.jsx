import React from 'react'
import SignInForm from '../../forms/sign-in/sign-in-form.component'
import SignUpForm from '../../forms/sign-up/sign-up-form.component'
import './sign-in.styles.scss'

const SignIn = () => {
  return (
    <div className='sign-in'>
      {/* <SignInForm /> */}
      <SignUpForm />
    </div>
  )
}

export default SignIn