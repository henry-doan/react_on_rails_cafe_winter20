import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from { 
    transform: rotate(0deg);
  }
  to { 
    transform: rotate(360deg);
  }
`

const morph = keyframes`
  0% { border-radius: 3px; width: 500px; }
  25% { border-radius: 50px; width: 200px; }
  50% { border-radius: 80px; width: 400px; }
  100% { border-radius: 3px; width: 500px; }
`

export const HomeImg = styled.img`
  width: 500px;
  margin: 0 auto;
  animation: ${spin} 4s linear 1s; 
`

export const HomeImg2 = styled.img`
  width: 500px;
  margin: 0 auto;
  animation: ${morph} 4s linear 1s; 
`