import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme from '../../styles/theme';

export const SocialContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: auto;

  @media (min-width: ${theme.breakpoints.tablet}) {
    width: auto;
    justify-content: flex-start;
  }
`;

export const SocialLink = styled.a`
  align-items: center;
  background-color: transparent;
  border: 2px solid white;
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

  @media (min-width: ${theme.breakpoints.tablet}) {
    margin-right: 10px;
  }
`;

export const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
  color: ${theme.colors.lightShades};
  cursor: pointer;
  font-size: 1.5rem;
  text-align: center;
`;
