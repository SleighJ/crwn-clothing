import React from 'react'
import { useAuth, useAuthUpdate } from './auth.context'

// import './sign-in-and-sign-up.styles.scss'

const SignIn = () => {
  const auth = useAuth()
  const authUpdate = useAuthUpdate()

  console.log(auth, authUpdate)

  return (
    <div onClick={()=>authUpdate()}>
      hi jj
    </div>
  )

}

export default SignIn