import React from 'react';

import './form-button.styles.scss';

const FormButton = ({ children, ...otherProps }) => {
  return <button>{children}</button>;
};

export default FormButton;
