import css from 'styled-jsx/css';
import theme from '../styles/theme';

export default css.global`
  @import url('https://fonts.googleapis.com/css?family=Domine&display=swap');
  @font-face {
    font-family: 'Kielo';
    src: url('fonts/Kielo-Regular.otf') format('opentype');
  }
  @font-face {
    font-family: 'Rentukka';
    src: url('fonts/Rentukka-Regular.otf') format('opentype');
  }
  @font-face {
    font-family: 'Anson';
    src: url('fonts/Anson-Regular.otf') format('opentype');
  }
  @font-face {
    font-family: 'Planck';
    src: url('fonts/Planck-Regular.otf') format('opentype');
  }

  body {
    background-color: ${theme.colors.darkShades};
    /* background-image: url('/img/background.jpg'); */
    background-size: cover;
    background-position: center;
    font-family: ${theme.fontFamily.sansSerif};
    margin: 0;
    height: 100vh;
    width: 100vw;
  }
`;
