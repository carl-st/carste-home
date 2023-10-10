import React, { ComponentType } from 'react';
import PlayersBar from '../../../components/PlayersBar';
import { useTranslation } from 'next-i18next';
import {
  Container,
  CoverContainer,
  CoverImage,
  CoverImageWide,
  NameContainer,
  Logo,
} from './styles';

const Banner: ComponentType = () => {
  const [t] = useTranslation('podcast-banner');

  return (
    <Container>
        <CoverImage
          height={1000}
          width={1000}
          src="/img/podcast-cover.png"
          alt="podcast-cover"
        />
      <CoverContainer>
        <CoverImageWide
          height={600}
          width={1079}
          src="/img/keywords-wide.png"
          alt="podcast-cover"
        />
      </CoverContainer>
      <NameContainer>
        <Logo />
        <span>{t('listen')}</span>
        <PlayersBar />
      </NameContainer>
    </Container>
  );
};

export default Banner;
