import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap column;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-family: var(--font);
  color: var(--text-color);
  margin-bottom: 5px;
`;

export const CustomInput = styled.input`
  height: 35px;
  border: 1px solid var(--primary-color);
  border-radius: 8px;
  font-size: 16px;
  font-family: var(--font);
  color: var(--primary-color);
  padding-left: 8px;
  &:focus {
    outline: none;
  }
`;
