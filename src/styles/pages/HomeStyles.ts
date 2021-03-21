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

  @media (max-width: ${RESPONSIVE}) {
    width: 100%;
    margin-bottom: 15px;
  }
`;

export const FilterWrapper = styled.div`
  min-height: 300px;
  border: 1px solid var(--primary-color);
  border-radius: 8px;
  padding: 10px;
  display: flex;
  flex-flow: wrap column;
  background-color: var(--primary-color);
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
  color: var(--text-color);
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
    color: var(--text-color);
  }
`;
export const NumberOfStopsCard = styled.button<{ selected: boolean }>`
  border: none;
  background: none;
  width: 90px;
  height: 50px;
  border: 1px solid var(--text-color);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-family: var(--font);
  color: var(--text-color);
  line-height: 15px;
  margin-bottom: 10px;
  &:focus {
    outline: none;
  }

  ${props => props.selected && css`
    background-color: var(--text-color);
    color: var(--primary-color);
  `};
`;
