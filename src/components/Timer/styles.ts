import styled, { css } from 'styled-components';
import { TimeTypes } from '../../model/type/TimeTypes';

export const Container = styled.div`
  height: 80px;
  border: 1px solid var(--primary-color);
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 8px;
  margin-bottom: 15px;
`;

export const Text = styled.p`
  font-size: 16px;
  font-family: var(--font);
  color: var(--primary-color);
`;

export const Countdown = styled.div<{ timeType: TimeTypes }>`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 30px;
    font-family: var(--font);

    ${props => props.timeType === 'NO' && css`
      color: var(--primary-color);
    `};
    ${props => props.timeType === 'LAST_5' && css`
      color: var(--secondary-color);
    `};
    ${props => props.timeType === 'LAST_1' && css`
      color: var(--ending-color);
    `};
  }
`;
