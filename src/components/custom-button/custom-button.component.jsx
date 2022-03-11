import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({ children, isGoogleSignIn, handleClick, ...restProps }) => (
    <button 
      className={`${isGoogleSignIn ? 'google-sign-in' : ''}  custom-button`}
      onClick={()=>handleClick()}
      {...restProps}
    >
      { children }
    </button>
)

export default CustomButton