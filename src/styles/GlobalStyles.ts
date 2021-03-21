import styled, { createGlobalStyle } from "styled-components";
import { RESPONSIVE } from "../config/constants";

export default createGlobalStyle`
  
  :root {
    --primary-color: #0B598E;
    --secondary-color: #FFDC2C;
    --background-color: #121214;
    --text-color: #ffffff;
    --ending-color: #ff0000;
    --font: 'Hind', sans-serif;
  }

  * {
    font-family: var(--font);
  }
  body {
    background-color: var(--background-color);
    font-family: var(--font);
    padding: 10px;
    scroll-behavior: smooth;
  }

  button {
    cursor: pointer;
  }
`;

export const ScrollToTop = styled.button<{ show: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: var(--text-color);
  display: none;
  border: 1px solid var(--text-color);
  right: 10px;
  bottom: 10px;
  display: ${props => props.show ? 'block' : 'none'};
  position: fixed;
`;