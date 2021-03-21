import React from 'react';

import { ModalBackground, ModalContainer } from './styles';

export interface ModalProps {
  show: boolean;
  width?: string;
  height?: string;
}

const Modal: React.FC<ModalProps> = ({ show, children, width, height }) => {
  return (
    <ModalBackground show={show}>
      <ModalContainer width={width} height={height}>
        {children}
      </ModalContainer>
    </ModalBackground>
  );
}

export default Modal;