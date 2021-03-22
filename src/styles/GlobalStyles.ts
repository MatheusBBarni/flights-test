import styled, { createGlobalStyle } from "styled-components";
import { RESPONSIVE } from "../config/constants";

export default createGlobalStyle`
  
  :root {
    --primary-color: #0B598E;
    --secondary-color: #ffffff;
    --background-color: #121214;
    --warning-color: #FFDC2C;
    --error-color: #ff0000;
    --success-color: #00ff00;
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
    &:hover {
      transition: all .1s ease;
      transform: scale(1.01);
    }
  }
`;