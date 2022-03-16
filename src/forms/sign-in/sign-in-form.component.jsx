import React from 'react'
// context
import { useAuth } from '../../contexts/auth/auth.context'
// components
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'
// firebase utils
import { 
  signInWithGooglePopUp, 
  createUserDocumentFromAuth 
} from '../../firebase/firebase.utils'
//styles
import './sign-in-form.styles.scss'

const SignInForm = () => {
  
  const { 
    handleChange,
    handleSubmit,
    email,
    password,
    error,
  } = useAuth()

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp()
    const userDocRef = createUserDocumentFromAuth(user)
  }

  return (
     <div className='sign-in'>
       <h2>Sign into your account</h2>
       <span>Sign in with your email and password</span>
       { error ? <span className='error'>*{error}</span> : null }
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
              handleClick={(e) => alert('not ready yet')}
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