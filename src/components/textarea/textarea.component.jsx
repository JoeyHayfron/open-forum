import React from 'react';

import './textarea.styles.scss';

const CustomTextArea = ({ label, name, ...otherProps }) => (
  <div className="group">
    {label ? <label for={name}>{label}</label> : ''}
    <textarea name={name} {...otherProps} className="post-content" />{' '}
  </div>
);

export default CustomTextArea;
