import React from 'react';

import './button.styles.scss';

const CustomButton = ({ isSignUp, children, postBtn, ...otherProps }) => (
  <button
    {...otherProps}
    className={`${isSignUp ? 'isSignUp' : ''} ${
      postBtn ? 'postBtn' : ''
    } customButton`}
  >
    {children}
  </button>
);

export default CustomButton;
