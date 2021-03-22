import styled, { css } from 'styled-components';
import { RESPONSIVE } from '../../config/constants';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
`;

export const Column = styled.div<{ width: string }>`
  width: ${props => props.width};
  max-height: 100vh;
  padding: 10px;

  @media (max-width: ${RESPONSIVE}) {
    width: 100%;
    margin-bottom: 15px;
  }
`;

export const FilterWrapper = styled.div`
  min-height: 220px;
  border: 1px solid var(--primary-color);
  border-radius: 8px;
  padding: 10px;
  display: flex;
  flex-flow: wrap column;
  background-color: var(--primary-color);

  @media (max-width: ${RESPONSIVE}) {
    min-height: 150px;
  }
`;

export const ClearFilterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
export const ClearFilterButton = styled.button`
  width: max-content;
  border: none;
  background: none;
  font-size: 14px;
  font-family: var(--font);
  color: var(--secondary-color);
  margin-bottom: 15px;
`;

export const NumberOfStopsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-flow: wrap;
  p {
    width: 100%;
    margin-bottom: 10px;
    font-size: 14px;
    font-family: var(--font);
    color: var(--secondary-color);
  }
`;
export const NumberOfStopsCard = styled.button<{ selected: boolean }>`
  border: none;
  background: none;
  width: 90px;
  height: 50px;
  border: 1px solid var(--secondary-color);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-family: var(--font);
  color: var(--secondary-color);
  line-height: 15px;
  margin-bottom: 10px;
  &:focus {
    outline: none;
  }

  ${props => props.selected && css`
    background-color: var(--secondary-color);
    color: var(--primary-color);
  `};
`;

export const FlightsWrapper = styled.div`
  width: 100%;
`;

export const FlightsColumnTitle = styled.h1`
  text-align: start;
  font-size: 32px;
  font-weight: bold;
  font-family: var(--font);
  color: var(--secondary-color);
  margin-bottom: 20px;
`;
export const NoFlightsFound = styled.p`
  text-align: center;
  font-size: 26px;
  font-family: var(--font);
  color: var(--secondary-color);
`;
