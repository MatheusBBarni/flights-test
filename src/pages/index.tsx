import { useState } from 'react';
import Head from 'next/head';

import { TITLE } from '../config/constants';
import { Container, Column, FilterWrapper } from '../styles/pages/HomeStyles';
import Timer from '../components/Timer';
import { IFilter } from '../model/IFilter';

export default function Home() {
  const [filter, setFilter] = useState<IFilter>({
    companyName: '',
    numberOfStops: null,
  });

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
}
