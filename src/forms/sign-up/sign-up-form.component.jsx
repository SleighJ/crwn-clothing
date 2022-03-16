import React, { useState } from 'react'
import { useAuth } from '../../contexts/auth/auth.context'

import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'

import './sign-up-form.styles.scss'

const SignUpForm = () => {
  const [ loading, setLoading ] = useState(false)
  const { 
    handleChange,
    handleSubmitNewUser,
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
    await handleSubmitNewUser()
    setLoading(false)
  }

  return (
     <div className='sign-up'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
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
            type='password'
            value={confirmPassword}
            onChange={handleChange}
            required
          />
          <CustomButton
            onClick={() => {}} 
            type='submit'
          >
            { loading ? 'Loading..' : 'Submit' }
          </CustomButton>
        </form>
     </div>
  )
}

export default SignUpForm