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
    userEmail,
    setUserEmail,
    userPassword,
    setUserPassword,
    handleSubmit
  } = useAuth()

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp()
    const userDocRef = createUserDocumentFromAuth(user)
  }

  return (
     <>
       <span>Sign in with your email and password</span>
        <form>
          <FormInput 
            name='displayName'
            label='user name' 
            type='text'
            // value={userEmail}
            // handleChange={(e) => setUserEmail(e.target.value)}
            required
          />
          <FormInput 
            name='email'
            label='email' 
            type='email'
            // value={userEmail}
            // handleChange={(e) => setUserEmail(e.target.value)}
            required
          />
          <FormInput
            name='password'
            label='password'
            type='password'
            // value={userPassword}
            // handleChange={(e) => setUserPassword(e.target.value)}
            // required
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
     </>
  )
}

export default SignInForm