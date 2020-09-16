import React from 'react';

import './input.styles.scss';

const CustomInput = ({ label, name, ...otherProps }) => (
  <div className="group">
    {label ? <label for={name}>{label}</label> : ''}
    <input name={name} {...otherProps} className="post-title" />
  </div>
);

export default CustomInput;
