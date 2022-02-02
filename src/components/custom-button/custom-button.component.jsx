import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({ children, handleClick, ...restProps }) => (
    <button 
      className='custom-button'
      onClick={()=>handleClick()}
      {...restProps}
    >
      { children }
    </button>
)

export default CustomButton