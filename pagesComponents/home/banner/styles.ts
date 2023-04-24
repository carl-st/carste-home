import Image from 'next/image';
import styled from 'styled-components';
import theme from '../../../styles/theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.colors.mainBrand};

  @media (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

export const TextContainer = styled.div`
  h1 {
    margin: 0;
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    flex: 1;
  }
`;

export const ImageContainer = styled.div`
  display: block;

  @media (min-width: ${theme.breakpoints.tablet}) {
    display: flex;
    justify-content: flex-end;
  }
`;

export const ProfileImage = styled(Image)`
  border: 4px solid ${theme.colors.mainBrand};
  margin-right: 48px;
`;
