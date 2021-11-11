import React from 'react';
import './CustomButtonComponentStyle.scss';

const CustomButtonComponent = ({children, ...otherPropos}) =>{
  return (
    <div>
      <button className="custom-button" {...otherPropos}>
        {children}
      </button>
    </div>
  )
}

export default CustomButtonComponent