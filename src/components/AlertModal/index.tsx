import React from 'react';
import { FaTimes, FaCheck, FaExclamationTriangle } from "react-icons/fa";

import { Container, Title, TypeIndicator, CloseModalButton } from './styles';
import Modal, { ModalProps } from '../Modal';
import { AlertModalType } from '../../model/type/AlertModalType';

interface AlertModalProps extends ModalProps{
  title: string;
  type: AlertModalType;
  onClose: () => void;
}

const AlertModal: React.FC<AlertModalProps> = ({ 
  title,
  type, 
  onClose, 
  ...props 
}) => {
  return (
    <Modal {...props} width="400px" height="320px">
      <Container>
        <Title data-testid="alert-title">{title}</Title>
        <TypeIndicator type={type}>
          {type === 'ERROR' && <FaTimes data-testid="type-error" />}
          {type === 'SUCCESS' && <FaCheck data-testid="type-success" />}
          {type === 'WARNING' && <FaExclamationTriangle data-testid="type-warning" />}
        </TypeIndicator>
        <CloseModalButton onClick={onClose}>
          Fechar
        </CloseModalButton>
      </Container>
    </Modal>
  );
}

export default AlertModal;