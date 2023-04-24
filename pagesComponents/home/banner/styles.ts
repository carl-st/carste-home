import Image from 'next/image';
import styled from 'styled-components';
import theme from '../../../styles/theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.colors.mainBrand};
  min-width: 100%;
  margin-top: ${theme.sizes.mobileHeaderHeight};
  flex-direction: column;

  @media (min-width: ${theme.breakpoints.desktop}) {
    flex-direction: row;
    margin-top: ${theme.sizes.desktopHeaderHeight};
  }
`;

export const TextContainer = styled.div`
  text-align: center;

  h1 {
    margin: 0;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    flex: 1;
    text-align: left;
  }
`;

export const ImageContainer = styled.div`
  display: block;

  @media (min-width: ${theme.breakpoints.desktop}) {
    display: flex;
    justify-content: flex-end;
  }
`;

export const ProfileImage = styled(Image)`
  border: 4px solid ${theme.colors.mainBrand};

  @media (min-width: ${theme.breakpoints.desktop}) {
    margin-right: ${theme.spacings.xl};
  }
`;
