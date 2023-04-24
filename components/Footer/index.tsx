import React, { ComponentType } from 'react';
import { Text, FooterContainer } from './styles';

const Footer: ComponentType = () => (
  <FooterContainer>
      <Text>Fonts Kielo and Planck by Mikko Nuuttila</Text>
      <a href="https://mikkonuuttila.com">Website</a>
      <br />
      <Text>Podcast music by DJ Quads</Text>
      <a href="https://soundcloud.com/aka-dj-quads">Soundcloud</a>
  </FooterContainer>
);

export default Footer;
