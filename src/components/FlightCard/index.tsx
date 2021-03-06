import React from 'react';
import Image from 'next/image';
import { FaPlaneDeparture, FaPlaneArrival } from 'react-icons/fa';

import { Container, Column, DetailsButton } from './styles';
import { IFlight } from '../../model/IFlight';
import { ICompany } from '../../model/ICompany';
import { LATAM_CODE, GOL_CODE, AZUL_CODE } from '../../config/constants';
import formatDate from '../../util/formatDate';

const FlightCard: React.FC<{ flight: IFlight; onDetails: (flight: IFlight) => void }> = ({
  onDetails,
  flight,
}) => {
  const getLogo = (company: ICompany): string => {
    const { code } = company;
    let image = '/images/placeholder.jpg';

    if (code === LATAM_CODE) {
      image = '/images/latam-logo.jpg';
    }
    if (code === GOL_CODE) {
      image = '/images/gol-logo.jpeg';
    }
    if (code === AZUL_CODE) {
      image = '/images/azul-logo.png';
    }

    return image;
  };

  return (
    <Container data-testid="flight-card">
      <Column width="15%">
        <Image
          width="75" 
          height="75"
          src={getLogo(flight.cia)} 
          alt={flight.cia.name} 
        />
      </Column>
      <Column width="22.5%">
        <FaPlaneDeparture color="var(--secondary-color)" size="20px" style={{ marginBottom: '15px' }} />
        <p>{flight.originCity}</p>
        <p>{formatDate(flight.departureTime)}</p>
      </Column>
      <Column>
        <p>
          Paradas: &nbsp;
          {flight.numberOfStops}
        </p>
      </Column>
      <Column width="22.5%">
        <FaPlaneArrival color="var(--secondary-color)" size="20px" style={{ marginBottom: '15px' }} />
        <p>{flight.destinationCity}</p>
        <p>{formatDate(flight.arrivalTime)}</p>
      </Column>
      <Column>
        <DetailsButton onClick={() => onDetails(flight)}>
          Ver detalhes
        </DetailsButton>
      </Column>
    </Container>
  );
}

export default FlightCard;