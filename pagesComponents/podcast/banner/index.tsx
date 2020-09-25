import React, { ComponentType } from 'react';
import PlayersBar from '../../../components/PlayersBar';
import { useTranslation } from '../../../i18n';
import {
  Container,
  CoverContainer,
  CoverImage,
  CoverImageWide,
  NameContainer,
  Logo,
} from './styles';

const Banner: ComponentType = () => {
  const [t] = useTranslation('banner');

  return (
    <Container>
      <CoverContainer>
        <CoverImageWide src="/img/keywords-wide.png" alt="podcast-cover" />
        <CoverImage src="/img/podcast-cover.png" alt="podcast-cover" />
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
