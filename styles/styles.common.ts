import styled from 'styled-components';
import theme from '../styles/theme';

export const PaddedSection = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0 2rem 4rem;
  align-items: center;

  @media (min-width: ${theme.breakpoints.tablet}) {
    /* flex-direction: row; */
    padding: 0 20% 4rem;
  }
`;

export const MobilePlayersContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const DesktopPlayersContainer = styled(PaddedSection)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: ${theme.breakpoints.tablet}) {
    display: block;
  }
`;

export const YouTubeIframe = styled.iframe`
  margin: 10px 0;

  @media (min-width: ${theme.breakpoints.tablet}) {
    margin: 10px 20px 10px 0;
  }
`;