import styled, { css } from 'styled-components';

import { RESPONSIVE } from '../../config/constants';
import { AlertModalType } from '../../model/type/AlertModalType';

export const Container = styled.div`
  width: 100%;
  
  display: flex;
  flex-flow: wrap column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  font-family: var(--font);
  color: var(--secondary-color);
  text-align: center;
  margin-top: 20px;
  margin-bottom: 35px;
`;

export const CloseModalButton = styled.button`
  width: 200px;
  height: 45px;
  border: none;
  border-radius: 8px;
  background-color: var(--secondary-color);
  font-size: 16px;
  font-family: var(--font);
  color: var(--primary-color);
  margin-bottom: 15px;
`;

export const TypeIndicator = styled.div<{ type: AlertModalType }>`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  font-size: 100px;
  color: var(--secondary-color);
  margin-bottom: 30px;
  display: flex;
  flex-flow: wrap column;
  justify-content: center;
  align-items: center;

  ${props => props.type === 'ERROR' && css`
    background-color: var(--error-color);
  `};
  ${props => props.type === 'SUCCESS' && css`
    background-color: var(--success-color);
  `};
  ${props => props.type === 'WARNING' && css`
    background-color: var(--warning-color);
  `};
`;
