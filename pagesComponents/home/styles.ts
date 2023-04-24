import styled from 'styled-components';
import theme from '../../styles/theme';

export const Greeting = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  bottom: 100px;
  right: 0;
  font-size: 128px;
  font-weight: 900;
  color: ${theme.colors.mainBrand};
  flex-direction: column;
  transform: rotate(270deg);

  @media (min-width: ${theme.breakpoints.desktop}) {
    flex-direction: row;
  }
`;
