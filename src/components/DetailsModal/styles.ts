import styled from 'styled-components';

import { RESPONSIVE } from '../../config/constants';

export const Container = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
`;

export const CloseModalButton = styled.button`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 5px;
  right: 5px;
  background: none;
  border: none;
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

export const PriceWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
`;

export const Price = styled.div`
  width: 48%;
  font-family: var(--font);
  color: var(--secondary-color);
  text-align: center;
  margin-bottom: 15px;
  label {
    font-size: 14px;
  }
  p {
    font-weight: bold;
    font-size: 16px;
    margin-top: 5px;
  }

  @media (max-width: ${RESPONSIVE}) {
    width: 100%;
  }
`;

export const TotalValue = styled.div`
  width: 100%;
  font-family: var(--font);
  color: var(--secondary-color);
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    &.text {
      font-size: 18px;
      margin-right: 15px;
    }
    &.value {
      font-weight: bold;
      font-size: 20px;
    }
  }
`;

export const BuyButton = styled.button`
  margin-top: 40px;
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
