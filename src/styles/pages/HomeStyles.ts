import styled from 'styled-components';
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
  padding: 0 10px;
  display: flex;
`;
