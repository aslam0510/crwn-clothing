import React from 'react';
import './FormInputComponentStyle.scss';

const FormInput = ({handleChange,label,...otherProps})=>{
  
  return(
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (<label className={`${otherProps.value.length ? 'shrink' : null} form-input-label`}>{label}</label>) :  null}
    </div>
  )
}

export default FormInput