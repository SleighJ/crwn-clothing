import React from 'react'

import './form-input.styles.scss'

const FormInput = ({ 
  handleChange, 
  label, 
  ...restProps 
}) => (
  <div className='group'>
    <input 
      className='form-input' 
      onChange={handleChange} 
      {...restProps} 
    />
  </div>
)

export default FormInput