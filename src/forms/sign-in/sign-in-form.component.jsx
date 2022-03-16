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
    handleSubmitSignIn,
    email,
    password,
    error,
  } = useAuth()

  // TODO: move to context
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp()
    const userDocRef = createUserDocumentFromAuth(user)
  }

  const handleSubmitForm = async (e) => {
    e.preventDefault()
    const user = await handleSubmitSignIn()
    console.log(user)
  }

  return (
     <div className='sign-in'>
       <h2>Sign into your account</h2>
       <span>Sign in with your email and password</span>
       { error ? <span className='error'>*{error}</span> : null }
        <form onSubmit={handleSubmitForm}>
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
              handleClick={() => {}}
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