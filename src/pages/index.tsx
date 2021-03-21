import { useState } from 'react';
import Head from 'next/head';

import { TITLE } from '../config/constants';
import { Container, Column, FilterWrapper } from '../styles/pages/HomeStyles';
import Timer from '../components/Timer';
import { IFilter } from '../model/IFilter';
import { GetServerSideProps } from 'next';
import { HomeProps } from '../model/HomeProps';
import FlightsService from '../services/FlightsService';
import { IFlight } from '../model/IFlight';

export default function Home({ flights }: HomeProps) {
  const [filter, setFilter] = useState<IFilter>({
    companyName: '',
    numberOfStops: null,
  });
  const [pageFlights, setPageFlights] = useState<IFlight[]>(flights);
  

  return (
    <Container>
      <Head>
        <title>{TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&display=swap"/>
      </Head>

      <Column width="26%">
        <Timer />
        <FilterWrapper></FilterWrapper>
      </Column>
      <Column width="68%">
        <p>teste 2</p>
      </Column>
    </Container>
  )
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
