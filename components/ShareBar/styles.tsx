import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme from '../../styles/theme';

export const SocialContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: auto;

  ${breakpoint('tablet')`
    width: auto;
    justify-content: flex-start;
  `};
`;

export const SocialLink = styled.a`
  background-color: ${theme.colors.lightAccent};
  border: 2px solid ${theme.colors.lightAccent};
  border-radius: 50%;
  text-decoration: none;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50px;
  width: 50px;
  max-width: 50px;
  margin-right: 5px;
  transition: border-color 0.2s linear;

  &:hover {
    border: 2px solid ${theme.colors.mainBrand};
  }

  ${breakpoint('tablet')`
    margin-right: 10px;
  `}
`;

export const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
  cursor: pointer;
  font-size: 1.5rem;
  text-align: center;
  line-height: 100%;
  align-items: center;
`;
