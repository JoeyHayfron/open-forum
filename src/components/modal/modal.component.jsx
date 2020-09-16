import React from 'react';
import { Container } from './modal.styles';

const ModalContainer = ({ children, ...otherProps }) => {
  return <Container {...otherProps}>{children}</Container>;
};

export default ModalContainer;
