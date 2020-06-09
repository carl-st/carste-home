import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';
import theme from '../styles/theme';

export const PaddedSection = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0 2rem 4rem;
  align-items: center;

  ${breakpoint('tablet')`
    flex-direction: row;
    padding: 0 20% 4rem;
  `}
`;

export const Banner = styled(PaddedSection)`
  color: ${theme.colors.mainBrand};
  justify-content: center;
  background-image: url('/img/background.jpg');
  background-position: center;
  background-size: cover;
  min-height: calc(100vh - ${theme.sizes.mobileHeaderHeight});
  align-items: center;

  ${breakpoint('tablet')`
    flex-direction: row;
    min-height: calc(100vh - ${theme.sizes.desktopHeaderHeight});
  `};
`;

export const TextContainer = styled.div`
  margin-top: 2rem;
  text-align: center;

  h1 {
    margin: 0;
  }

  ${breakpoint('tablet')`
    flex: 1;
    text-align: left;
  `};
`;

export const ImageContainer = styled.div`
  display: block;

  ${breakpoint('tablet')`
    display: flex;
    justify-content: flex-end;
  `};
`;

export const ProfileImage = styled.img`
  max-width: 200px;
  max-height: 200px;
  border-radius: 50%;
  margin: 1rem;
  border: 8px solid ${theme.colors.mainBrand};

  ${breakpoint('tablet')`
    margin: 1rem 4rem;
    max-width: 300px;
  `};
  ${breakpoint('desktop')`
    max-width: 400px;
    max-height: 400px;
  `};
`;
