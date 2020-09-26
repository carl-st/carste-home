import { createGlobalStyle } from 'styled-components';
import theme from '../styles/theme';


const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Kielo';
    src: url('fonts/Kielo-Regular.otf') format('opentype');
  }
  @font-face {
    font-family: 'Planck';
    src: url('fonts/Planck-Regular.otf') format('opentype');
  }
  /* @font-face {
    font-family: 'Rentukka';
    src: url('fonts/Rentukka-Regular.otf') format('opentype');
  }
  @font-face {
    font-family: 'Anson';
    src: url('fonts/Anson-Regular.otf') format('opentype');
  } */

  * {
    box-sizing: border-box;
  }

  body {
    box-sizing: border-box;
    background-color: ${theme.colors.darkShades};
    background-size: cover;
    background-position: center;
    font-family: ${theme.fontFamily.paragraph};
    margin: 0;
  }

  h1 {
    font-size: 2rem;
    font-family: ${theme.fontFamily.heading};
    text-transform: uppercase;
    font-weight: 900;
  }

  h2 {
    font-size: 1.2rem;
    font-family: ${theme.fontFamily.heading};
    font-weight: 400;
  }

  p {
    font-family: ${theme.fontFamily.paragraph};
    font-size: 1rem;
    font-weight: 300;
  }

  a {
    color: white;
  }

  button {
    background: transparent;
    border: none;
    outline: none;
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    h1 {
      font-size: 3rem;
    }

    h2 {
      font-size: 1.6rem;
    }
  }
`;

export default GlobalStyles;