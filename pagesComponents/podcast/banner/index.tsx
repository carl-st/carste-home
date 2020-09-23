import React, { ComponentType } from 'react';
import PlayersBar from '../../../components/PlayersBar';
import {
  Container,
  CoverContainer,
  CoverImage,
  CoverImageWide,
  NameContainer,
  Logo,
} from './styles';

const Banner: ComponentType = () => (
  <Container>
      <CoverContainer>
        <CoverImageWide src="/img/keywords-wide.png" alt="podcast-cover" />
        <CoverImage src="/img/podcast-cover.png" alt="podcast-cover" />
      </CoverContainer>
      <NameContainer>
        <Logo />
        <span>Posłuchaj:</span>
        <PlayersBar />
      </NameContainer>
  </Container>
);

export default Banner;
