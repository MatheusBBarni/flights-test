import React from 'react';

import { ModalBackground, ModalContainer, ModalGlobalStyle } from './styles';

export interface ModalProps {
  show: boolean;
  width?: string;
  height?: string;
}

const Modal: React.FC<ModalProps> = ({ show, children, width, height }) => {
  return show && (
    <ModalBackground show={show} data-testid="modal">
      <ModalGlobalStyle />
      <ModalContainer width={width} height={height}>
        {children}
      </ModalContainer>
    </ModalBackground>
  );
}

export default Modal;