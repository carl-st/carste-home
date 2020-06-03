import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';
import PodcastLogo from '../../public/img/podcast-logo.svg';

export const PaddedSection = styled.section`
  padding: 0 2rem 4rem;

  ${breakpoint('tablet')`
    padding: 0 20% 4rem;
  `}
`;

export const Banner = styled.div`
  background-color: black;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  ${breakpoint('tablet')`
    flex-direction: row;
  `};
`;

export const CoverContainer = styled.div`
  flex: 2;
`;

export const NameContainer = styled.div`
  display: none;
  flex: 1;
  min-width: 40%;

  span {
    margin: 20px;
  }

  ${breakpoint('tablet')`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    flex: 1;
    padding: 4rem;
    color: white;
  `};
`;

export const LogoContainer = styled.div`
  min-width: 90px;
  width: 90px;
  margin-right: 30px;

  ${breakpoint('tablet')`
    margin-right: 60px;
    min-width: 150px;
  `};
`;

export const Logo = styled(PodcastLogo)`
  width: 100%;
`;

export const CoverImage = styled.img`
  display: block;
  width: 100%;
  height: auto;

  ${breakpoint('tablet')`
    display: none;
  `};
`;

export const CoverImageWide = styled.img`
  display: none;
`;

export const MobilePlayersContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const DesktopPlayersContainer = styled(PaddedSection)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const YouTubeIframe = styled.iframe`
  margin: 10px 0;
`;
