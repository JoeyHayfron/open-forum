import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ name, label, ...otherProps }) => {
  return (
    <div className="input-wrapper">
      {label ? <label>{name.toUpperCase()}</label> : ''}
      <input name={name} {...otherProps} required />
    </div>
  );
};

export default FormInput;
