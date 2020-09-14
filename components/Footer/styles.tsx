import styled from 'styled-components';
import theme from '../../styles/theme';

export const FooterContainer = styled.div`
  background-color: ${theme.colors.mainBrand};
  padding: 4rem 2rem;

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 4rem 20%;
  }
`;

export const Text = styled.span`
  margin-right: 4px;
`;