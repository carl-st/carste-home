import React, { ComponentType } from 'react';
import ShareBar from '../../../components/IconBar/ShareBar';
import {
  Container,
  ImageContainer,
  ProfileImage,
  TextContainer,
} from './styles';

const Banner: ComponentType = () => (
  <Container>
    <ImageContainer>
      <div>
        <ProfileImage className="profile-image" src="/img/profilepic.jpg" />
      </div>
    </ImageContainer>
    <TextContainer>
      <h1>Karol Stępień</h1>
      <h2>Senior Full Stack Engineer</h2>
      <ShareBar />
    </TextContainer>
  </Container>
);

export default Banner;
