import styled, { css } from 'styled-components';

const showModalContainer = css`
  display: block;
`;

const hideModalContainer = css`
  display: none;
`;

const showHideModal = (props) => {
  return props.showModal ? showModalContainer : hideModalContainer;
};

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);

  ${showHideModal}
`;
