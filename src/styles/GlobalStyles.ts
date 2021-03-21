import { createGlobalStyle } from "styled-components"

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
  }

  button {
    cursor: pointer;
  }
`;