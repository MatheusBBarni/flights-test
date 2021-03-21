import React, { InputHTMLAttributes } from 'react';

import { Container, Label, CustomInput } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}


const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <CustomInput {...props} />
    </Container>
  );
}

export default Input;