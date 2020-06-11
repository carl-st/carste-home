import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';
import PodcastLogo from '../../../public/img/podcast-logo.svg';

export const PaddedSection = styled.section`
  padding: 0 2rem 4rem;

  ${breakpoint('tablet')`
    padding: 0 20% 4rem;
  `}
`;

export const Banner = styled.div`
  align-items: center;
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

  span {
    margin: 20px;
  }

  ${breakpoint('tablet')`
    align-items: center;
    background-color: transparent;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-height: 450px;
    max-width: 600px;
    padding: 4rem;
    position: absolute;
    right: 0;
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

  ${breakpoint('tablet')`
    display: block;
  `}
`;

export const MobilePlayersContainer = styled.div`
  display: flex;
  justify-content: center;

  ${breakpoint('tablet')`
    display: none;
  `}
`;

export const DesktopPlayersContainer = styled(PaddedSection)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${breakpoint('tablet')`
    display: block;
  `}
`;

export const YouTubeIframe = styled.iframe`
  margin: 10px 0;

  ${breakpoint('tablet')`
    margin: 10px 20px 10px 0;
  `}
`;
