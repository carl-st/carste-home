import styled from 'styled-components';
import theme from '../../../styles/theme';
import PodcastLogo from '../../../public/img/podcast-logo.svg';

export const Container = styled.div`
  align-items: center;
  background-color: black;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

export const CoverContainer = styled.div`
  flex: 2;
`;

export const NameContainer = styled.div`
  display: none;

  span {
    margin: 20px;
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
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
  }
`;

export const Logo = styled(PodcastLogo)`
  width: 100%;
`;

export const CoverImage = styled.img`
  display: block;
  width: 100%;
  height: auto;

  @media (min-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const CoverImageWide = styled.img`
  display: none;

  @media (min-width: ${theme.breakpoints.tablet}) {
    display: block;
  }
`;
