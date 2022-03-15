import React from 'react'
import { useAuth } from '../../contexts/auth/auth.context'

import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'

const SignUpForm = () => {
  const { 
    handleChange,
    displayName,
    email,
    password,
    confirmPassword
  } = useAuth()

  return (
     <>
       <span>Sign in with your email and password</span>
        <form>
          <FormInput 
            name='displayName'
            label='user name' 
            type='text'
            value={displayName}
            onChange={handleChange}
            required
          />
          <FormInput 
            name='email'
            label='email' 
            type='email'
            value={email}
            onChange={handleChange}
            required
          />
          <FormInput
            name='password'
            label='password'
            type='password'
            value={password}
            onChange={handleChange}
            required
          />
          <FormInput
            name='confirmPassword'
            label='confirm password'
            type='confirmPassword'
            value={confirmPassword}
            onChange={handleChange}
            required
          />
          {/* <div className='buttons'>
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
          </div> */}
        </form>
     </>
  )
}

export default SignUpForm