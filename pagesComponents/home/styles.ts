import styled from 'styled-components';
import theme from '../../styles/theme';

export const Greeting = styled.div`
  display: flex;
  position: sticky;
  align-items: center;
  bottom: ${theme.spacings.xl};
  margin-bottom: ${theme.spacings.xl};
  width: fit-content;
  font-size: 128px;
  font-weight: 900;
  font-family: ${theme.fontFamily.heading};
  color: ${theme.colors.mainBrand};
  flex-direction: column;
  align-self: flex-end;
  transform: rotate(270deg);
  transform-origin: bottom left;
  opacity: 0.1;

  @media (min-width: ${theme.breakpoints.desktop}) {
    opacity: 1;
  }
`;
