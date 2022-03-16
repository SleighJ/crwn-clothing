import React, { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/auth/auth.context'

import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'

const SignUpForm = () => {
  const [ loading, setLoading ] = useState(false)
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

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    
    if (password !== confirmPassword) {
      setError('password does not match confirm password')
      return
    }
    
    setLoading(true)
    await handleSubmit()
    setLoading(false)
  }

  return (
     <>
       <span>Sign in with your email and password</span>
       { error ? <span className='error'>*{error}</span> : null }
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
            { loading ? 'Loading..' : 'Submit' }
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