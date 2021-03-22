import { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { TITLE } from '../config/constants';
import { 
  Container, 
  Column, 
  FilterWrapper, 
  ClearFilterButton, 
  ClearFilterWrapper, 
  NumberOfStopsWrapper, 
  NumberOfStopsCard, 
  FlightsWrapper, 
  NoFlightsFound, 
  FlightsColumnTitle
} from '../styles/pages/HomeStyles';
import Timer from '../components/Timer';
import { IFilter } from '../model/IFilter';
import { HomeProps } from '../model/HomeProps';
import FlightsService from '../services/FlightsService';
import { IFlight } from '../model/IFlight';
import Input from '../components/Input';
import FlightCard from '../components/FlightCard';
import { NumberOfStopsTypes } from '../model/type/NumberOfStopsTypes';
import DetailsModal from '../components/DetailsModal';
import sanitizeString from '../util/sanitizeString';

export default function Home({ flights }: HomeProps) {
  const [filter, 
    setFilter] = useState<IFilter>({
    companyName: '',
    numberOfStops: null,
  });
  const [pageFlights, setPageFlights] = useState<IFlight[]>(flights);
  const [showDetailsModal, setShowDetailsModal] = useState<boolean>(false);
  const [selectedFlight, setSelectedFlight] = useState<IFlight>();

  useEffect(() => {
    setPageFlights(
      flights
        .filter(item => {
          if (!filter.companyName || filter.companyName === '') {
            return item;
          }
          if (sanitizeString(item.cia.name).includes(sanitizeString(filter.companyName))) {
            return item;
          }
        })
        .filter(item => {
          if (!filter.numberOfStops) {
            return item;
          }
          if (filter.numberOfStops === "DIRETO" && item.numberOfStops === 0) {
            return item;
          }
          if (filter.numberOfStops === "1" && item.numberOfStops === 1) {
            return item;
          }
          if (filter.numberOfStops === "+2" && item.numberOfStops >= 2) {
            return item;
          }
        })
    );
  }, [filter]);
  
  const changeFilter = (type: NumberOfStopsTypes) => {
    if (type === filter.numberOfStops) {
      setFilter({ ...filter, numberOfStops: null });
      return;
    }
    setFilter({ ...filter, numberOfStops: type });
    return;
  };

  const openDetailsModal = (flight: IFlight) => {
    setSelectedFlight(flight);
    setShowDetailsModal(true);
  };
  const closeDetailsModal = () => {
    setSelectedFlight(null);
    setShowDetailsModal(false);
  };


  return (
    <Container data-testid="home">
      <Head>
        <title>{TITLE}</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&display=swap"/>
      </Head>

      <Column width="26%">
        <Timer />
        <FilterWrapper data-testid="filter">
          <ClearFilterWrapper>
            <ClearFilterButton onClick={() => setFilter({ companyName: '', numberOfStops: null })}>
              Limpar filtros
            </ClearFilterButton>
          </ClearFilterWrapper>
          <Input
            label="Nome da companhia aérea"
            value={filter.companyName}
            placeholder="Digite aqui..."
            onChange={(event) => setFilter({ ...filter, companyName: event.target.value })}
          />
          <NumberOfStopsWrapper>
            <p>Quantidade de paradas</p>
            <NumberOfStopsCard 
              selected={filter.numberOfStops === 'DIRETO'}
              onClick={() => changeFilter('DIRETO')}>
              Vôo direto
            </NumberOfStopsCard>
            <NumberOfStopsCard 
              selected={filter.numberOfStops === '1'}
              onClick={() => changeFilter('1')}>
              1 parada
            </NumberOfStopsCard>
            <NumberOfStopsCard 
              selected={filter.numberOfStops === '+2'}
              onClick={() => changeFilter('+2')}>
              2+ paradas
            </NumberOfStopsCard>
          </NumberOfStopsWrapper>
        </FilterWrapper>
      </Column>
      <Column width="68%">
        <FlightsColumnTitle>Vôos encontrados</FlightsColumnTitle>
        <FlightsWrapper>
          {pageFlights.length === 0 ? (
            <NoFlightsFound>Nenhuma viagem foi encontrada com esse filtro.</NoFlightsFound>
          ) : pageFlights
            .map((item, index) => (
            <FlightCard key={index} flight={item} onDetails={openDetailsModal} />
          ))}
        </FlightsWrapper>
      </Column>
      {selectedFlight && (
        <DetailsModal
          show={showDetailsModal} 
          flight={selectedFlight} 
          onClose={closeDetailsModal} 
        />
      )}
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const golFlights = await FlightsService.getGolFlights() || []; // this
  const latamFlights = await FlightsService.getLatamFlights() || [];
  const azulFlights = await FlightsService.getAzulFlights() || [];
  
  return {
    props: {
      flights: [
        ...golFlights,
        ...latamFlights,
        ...azulFlights,
      ],
    },
  };
};
