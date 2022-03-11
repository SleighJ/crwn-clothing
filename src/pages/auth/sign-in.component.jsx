import React from 'react'
import { useAuth } from './auth.context'

import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'

// Google sign-in method
import { signInWithCredential } from 'firebase/auth'

import './sign-in.styles.scss'

const SignIn = () => {
  const { 
    userEmail,
    setUserEmail,
    userPassword,
    setUserPassword,
    handleSubmit
  } = useAuth()

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form>
        <FormInput 
          name='email'
          label='email' 
          type='email'
          value={userEmail}
          handleChange={(e) => setUserEmail(e.target.value)}
          required
        />
        <FormInput
          name='password'
          label='password'
          type='password'
          value={userPassword}
          handleChange={(e) => setUserPassword(e.target.value)}
          required
        />
        <CustomButton
          type='submit'
          handleClick={(e) => handleSubmit(e)}
        >
          { 'Sign In' }
        </CustomButton>
        <CustomButton
          handleClick={signInWithCredential}
        >
          { 'Sign In With Google' }
        </CustomButton>
      </form>
    </div>
  )
}

export default SignIn