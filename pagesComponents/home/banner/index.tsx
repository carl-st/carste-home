import React, { ComponentType } from 'react';
import IconBar from '../../../components/IconBar';
import { useTranslation } from 'next-i18next';
import {
  Container,
  ImageContainer,
  ProfileImage,
  TextContainer,
} from './styles';

const Banner: ComponentType = () => (
    <Container>
      <ImageContainer>
          <ProfileImage width={250} height={250} alt="Profile image" src="/img/profilepic.jpg" />
      </ImageContainer>
      <TextContainer>
        <h1>Karol Stępień</h1>
        <h2>Digital Products | Web & Mobile Applications
        <br />Full Stack Software Engineer | Software Engineering Manager</h2>
        </TextContainer>
        <IconBar />
    </Container>
  );

export default Banner;
