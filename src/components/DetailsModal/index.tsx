import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

import { Container, Title, Price, PriceWrapper, TotalValue, BuyButton, CloseModalButton } from './styles';
import Modal, { ModalProps } from '../Modal';
import { IFlight } from '../../model/IFlight';
import moneyMask from '../../util/moneyMask';
import AlertModal from '../AlertModal';

interface DetailsModalProps extends ModalProps{
  flight: IFlight;
  onClose: () => void;
}

const DetailsModal: React.FC<DetailsModalProps> = ({ 
  flight: {
    flightNumber,
    priceData: {
      perChild,
      perAdult,
      total,
      taxes
    }
  }, 
  onClose, 
  ...props 
}) => {
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  return (

    <>
      <Modal {...props} width="400px" height="320px">
        <CloseModalButton onClick={onClose}>
          <FaTimes color="var(--secondary-color)" size="30px" />
        </CloseModalButton>
        <Container>
          <Title>Detalhes do Vôo - {flightNumber}</Title>
          <PriceWrapper>
            <Price>
              <label>Tarifa por criança:</label>
              <p>{moneyMask(perChild)}</p>
            </Price>
            <Price>
              <label>Impostos por criança:</label>
              <p>{moneyMask(taxes.perChild)}</p>
            </Price>
          </PriceWrapper>
          <PriceWrapper>
            <Price>
              <label>Tarifa por adulto:</label>
              <p>{moneyMask(perAdult)}</p>
            </Price>
            <Price>
              <label>Impostos por adulto:</label>
              <p>{moneyMask(taxes.perAdult)}</p>
            </Price>
          </PriceWrapper>
          <TotalValue>
            <p className="text">Valor total:</p>
            <p className="value">{moneyMask(total)}</p>
          </TotalValue>
          <BuyButton onClick={() => setShowSuccessModal(true)}>
            Comprar
          </BuyButton>
        </Container>
      </Modal>

      <AlertModal
        show={showSuccessModal}
        onClose={() => {
          setShowSuccessModal(false);
          onClose();
        }}
        title={`Você comprou a viagem de número: ${flightNumber}`}
        type="SUCCESS"
      />
    </>
  );
}

export default DetailsModal;