import React from 'react';
import Image from 'next/image';
import { format, parseISO } from 'date-fns';
import { FaPlaneDeparture, FaPlaneArrival } from 'react-icons/fa';

import { Container, Column, DetailsButton } from './styles';
import { IFlight } from '../../model/IFlight';
import { ICompany } from '../../model/ICompany';
import { LATAM_CODE, GOL_CODE, AZUL_CODE } from '../../config/constants';

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

  const formatDate = (date: string) => {
    return format(parseISO(date), 'dd/MM/yyyy HH:mm')
  };

  return (
    <Container>
      <Column width="15%">
        <Image
          width="70" 
          height="70"
          src={getLogo(flight.cia)} 
          alt={flight.cia.name} 
        />
      </Column>
      <Column width="22.5%">
        <FaPlaneDeparture color="var(--text-color)" size="20px" style={{ marginBottom: '15px' }} />
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
        <FaPlaneArrival color="var(--text-color)" size="20px" style={{ marginBottom: '15px' }} />
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