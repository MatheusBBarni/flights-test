import styled, { createGlobalStyle } from 'styled-components';

export const ModalGlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export const ModalBackground = styled.div<{ show: boolean }>`
	z-index: 99;
	display: ${props => props.show ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width:100vw;
	background: rgba(0,0,0,0.5);
`;

export const ModalContainer = styled.div<{ width?: string; height?: string }>`
  position:fixed;
	background: var(--primary-color);
	max-width: 90%;
  width: ${props => props.width || '300px'};
	/*height: auto;*/
  min-height: ${props => props.height || '200px'};

	border-radius: 8px;
	padding: 10px;
`;
