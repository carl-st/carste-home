import styled from 'styled-components';
import theme from '../../styles/theme';

export const Greeting = styled.div`
  position: sticky;
  // top: ${theme.spacings.xl};
  bottom: ${theme.spacings.xl};
  width: fit-content;
  height: fit-content;
  font-size: 128px;
  font-weight: 900;
  font-family: ${theme.fontFamily.heading};
  color: ${theme.colors.mainBrand};
  writing-mode: tb-rl;
  transform: rotate(-180deg);
  opacity: 0.1;

  @media (min-width: ${theme.breakpoints.desktop}) {
    opacity: 1;
  }
`;
