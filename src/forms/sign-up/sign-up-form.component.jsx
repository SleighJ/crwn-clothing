import React from 'react'
import { useAuth } from '../../contexts/auth/auth.context'

import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import { createAuthUserWithEmailAndPassword } from '../../firebase/firebase.utils'

const SignUpForm = () => {
  const { 
    handleChange,
    handleSubmit,
    displayName,
    email,
    password,
    confirmPassword
  } = useAuth()

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    
    if (password !== confirmPassword) {
      alert('passwords do not match')
      return
    }
    
    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      )
      console.log(response)
    } catch (error) {
      console.log('error in sign up form component ', error)
    }

    // const createdUser = await handleSubmit()
    // console.log(createdUser)
  }

  return (
     <>
       <span>Sign in with your email and password</span>
        <form onSubmit={handleFormSubmit}>
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
          <CustomButton type='submit'>
            Submit
          </CustomButton>
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