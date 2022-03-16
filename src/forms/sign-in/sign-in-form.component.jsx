import React from 'react'

import { useAuth } from '../../contexts/auth/auth.context'

import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'

import { 
  signInWithGooglePopUp, 
  createUserDocumentFromAuth 
} from '../../firebase/firebase.utils'

const SignInForm = () => {
  
  const { 
    handleChange,
    handleSubmit,
    displayName,
    email,
    password,
    confirmPassword,
    setError,
    error
  } = useAuth()

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp()
    const userDocRef = createUserDocumentFromAuth(user)
  }

  return (
     <div className='sign-in'>
       <span>Sign in with your email and password</span>
        <form>
          <FormInput 
            name='email'
            label='email' 
            type='email'
            value={email}
            handleChange={handleChange}
            required
          />
          <FormInput
            name='password'
            label='password'
            type='password'
            value={password}
            handleChange={handleChange}
            required
          />
          <div className='buttons'>
            <CustomButton
              type='submit'
              handleClick={(e) => handleSubmit(e)}
            >
              { 'Sign In' }
            </CustomButton>
            <CustomButton
              handleClick={logGoogleUser}
              isGoogleSignIn
            >
              { 'Sign In With Google' }
            </CustomButton>
          </div>
        </form>
     </div>
  )
}

export default SignInForm