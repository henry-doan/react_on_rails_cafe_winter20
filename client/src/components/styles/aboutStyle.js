import styled from 'styled-components';

export const AboutTitle = styled.h1`
  color: green;
  background-color: pink;
  font-size: ${props => props.lrg ? '4rem' : '2rem'}
`

const fontSize = (size) => {
  switch(size) {
    case 'lrg':
      return '4rem';
    case 'md':
      return '2rem';
    default:
      return '1rem';
  }
}

const AboutPara = styled.p`
  color: purple;
  font-size: ${props => fontSize(props.fSize)};

  @media (min-width: 600px) {
    color: yellow !important;
    background: black;
  }
`

export default AboutPara;