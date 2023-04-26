import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme from './theme';

export const Flex = styled.div`
  display: flex;
  min-width: 100%;
  min-height: 100%;
  justify-content: space-between;
  align-items: end;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PaddedSection = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 2rem;
  align-items: center;

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 2rem 15%;
  }
`;

export const MobilePlayersContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const DesktopPlayersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: ${theme.breakpoints.tablet}) {
    display: block;
  }
`;

export const YouTubeIframe = styled.iframe`
  margin: 10px 0 30px;
  height: 225px;
  width: 100%;

  @media (min-width: ${theme.breakpoints.tablet}) {
    height: 315px;
    margin: 10px 20px 10px 0;
    max-width: 560px;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;

  @media (min-width: ${theme.breakpoints.desktop}) {
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
  height: 40px;
  width: 40px;
  max-width: 40px;
  margin-right: 5px;
  transition: border-color 0.2s linear;

  &:hover {
    border: 2px solid ${theme.colors.mainBrand};
  }

  @media (min-width: ${theme.breakpoints.bigMobile}) {
    height: 50px;
    width: 50px;
    max-width: 50px;
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    margin-right: 10px;
  }
`;

export const DownloadLink = styled(SocialLink)`
  border-radius: 25px;
  font-weight: 900;
  font-family: ${theme.fontFamily.heading};
  text-transform: uppercase;
`;

export const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
  color: ${theme.colors.lightShades};
  cursor: pointer;
  font-size: 1.5rem;
  text-align: center;
`;
