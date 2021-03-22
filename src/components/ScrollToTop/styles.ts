import styled from 'styled-components';

export const Container = styled.button<{ show: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: var(--secondary-color);
  display: none;
  border: 1px solid var(--secondary-color);
  right: 10px;
  bottom: 10px;
  display: ${props => props.show ? 'block' : 'none'};
  position: fixed;
`;
