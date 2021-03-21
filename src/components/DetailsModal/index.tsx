import React from 'react';

import { Container } from './styles';
import Modal, { ModalProps } from '../Modal';
import { IFlight } from '../../model/IFlight';

interface DetailsModalProps extends ModalProps{
  flight: IFlight;
  onClose: () => void;
}

const DetailsModal: React.FC<DetailsModalProps> = ({ flight, onClose, ...props }) => {
  return (
    <Modal {...props} width="400px" height="400px">
      <Container>
        <p>teste</p>
      </Container>
    </Modal>
  );
}

export default DetailsModal;