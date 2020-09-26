import styled from 'styled-components';
import { PaddedSection, SocialLink } from '../../../styles/common';
import theme from '../../../styles/theme';

export const Container = styled(PaddedSection)`
  color: ${theme.colors.mainBrand};
  justify-content: center;
  background-image: url('/img/background.jpg');
  background-position: center;
  background-size: cover;
  min-height: calc(100vh - ${theme.sizes.mobileHeaderHeight});
  align-items: center;

  @media (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    min-height: calc(100vh - ${theme.sizes.desktopHeaderHeight});
  }
`;

export const TextContainer = styled.div`
  text-align: center;

  h1 {
    margin: 0;
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    flex: 1;
    max-width: 450px;
    text-align: left;
  }
`;

export const ImageContainer = styled.div`
  display: block;

  @media (min-width: ${theme.breakpoints.tablet}) {
    display: flex;
    justify-content: flex-end;
  }
`;

export const ProfileImage = styled.img`
max-width: 200px;
max-height: 200px;
border-radius: 50%;
margin: 1rem;
border: 8px solid ${theme.colors.mainBrand};

@media (min-width: ${theme.breakpoints.tablet}) {
  margin: 1rem 4rem;
  max-width: 300px;
}

@media (min-width: ${theme.breakpoints.desktop}) {
  max-width: 400px;
  max-height: 400px;
}
`;

export const DownloadLink = styled(SocialLink)`
  max-width: initial;
  border-radius: 25px;
  font-weight: 900;
  font-family: ${theme.fontFamily.heading};
  width: 100%;
  text-transform: uppercase;

  @media (min-width: ${theme.breakpoints.bigMobile}) {
    width: 350px;
    max-width: 350px;
  }
`;