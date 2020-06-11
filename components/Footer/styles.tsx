import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';
import theme from '../../styles/theme';

export const FooterContainer = styled.div`
  background-color: ${theme.colors.mainBrand};
  padding: 4rem 2rem;

  ${breakpoint('tablet')`
    padding: 4rem 20%;
  `}
`;

export const Text = styled.span`
  margin-right: 4px;
`;