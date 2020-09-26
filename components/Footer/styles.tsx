import styled from 'styled-components';
import theme from '../../styles/theme';

export const FooterContainer = styled.footer`
  background-color: ${theme.colors.mainBrand};
  padding: 4rem 2rem;

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 4rem 20%;
  }
`;

export const Text = styled.span`
  margin-right: 4px;
`;

export const LanguageButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1rem;
  margin-right: 4px;
  padding: 0;
  outline: none;
`;