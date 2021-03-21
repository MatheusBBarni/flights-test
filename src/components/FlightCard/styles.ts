import styled from 'styled-components';
import { RESPONSIVE } from '../../config/constants';

export const Container = styled.div`
  width: 100%;
  height: 180px;
  margin-bottom: 15px;
  display: flex;
  background-color: var(--primary-color);
  border: 1px solid var(--text-color);
  border-radius: 8px;
  @media (max-width: ${RESPONSIVE}) {
    height: auto;
    flex-flow: wrap;
  }
`;

export const Column = styled.div<{ width?: string }>`
  width: ${props => props.width || '20%'};
  border-right: 1px solid var(--text-color);

  display: flex;
  flex-flow: wrap column;
  align-items: center;
  justify-content: center;

  &:last-child {
    border-right: none;
  }

  p {
    font-size: 16px;
    font-family: var(--font);
    color: var(--text-color);
    text-align: center;
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: ${RESPONSIVE}) {
    width: 100%;
    border: none;
    padding: 10px;
  }
`;

export const DetailsButton = styled.button`
  max-width: 80%;
  height: 35px;
  font-size: 14px;
  font-family: var(--font);
  color: var(--primary-color);
  background-color: var(--text-color);
  border: none;
  border-radius: 8px;
`;
