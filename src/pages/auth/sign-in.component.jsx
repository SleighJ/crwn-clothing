import React from 'react'
import { useAuth } from './auth.context'

import FormInput from '../../components/form-input/form-input.component'

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
        <label>Email</label>
        <FormInput 
          name='email' 
          type='email'
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <label>Password</label>
        <FormInput
          name='password'
          type='password'
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <input onClick={(e)=>handleSubmit(e)} type='submit' value='Submit Form' />
      </form>
    </div>
  )

}

export default SignIn