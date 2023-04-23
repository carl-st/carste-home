import React, { ComponentType } from 'react';
import IconBar from '../../../components/IconBar';
import { useTranslation } from 'next-i18next';
import {
  Container,
  DownloadLink,
  ImageContainer,
  ProfileImage,
  TextContainer,
} from './styles';

const Banner: ComponentType = () => {
  const [t] = useTranslation('home-banner');

  return (
    <Container>
      <ImageContainer>
        <div>
          <ProfileImage className="profile-image" src="/img/profilepic.jpg" />
        </div>
      </ImageContainer>
      <TextContainer>
        <h1>Karol Stępień</h1>
        <h2>Senior Full Stack Engineer</h2>
        <IconBar />
        <DownloadLink
          href="/files/CV Karol Stępień.pdf"
          download
        >
          {t('download')}
        </DownloadLink>
      </TextContainer>
    </Container>
  );
};

export default Banner;
