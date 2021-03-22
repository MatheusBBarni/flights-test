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
          {type === 'ERROR' && <FaTimes />}
          {type === 'SUCCESS' && <FaCheck />}
          {type === 'WARNING' && <FaExclamationTriangle />}
        </TypeIndicator>
        <CloseModalButton onClick={onClose}>
          Fechar
        </CloseModalButton>
      </Container>
    </Modal>
  );
}

export default AlertModal;