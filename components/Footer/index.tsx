import React, { ComponentType } from 'react';
import { PaddedSection } from '../../styles/common';
import { Text, FooterContainer } from './styles';

const Footer: ComponentType = () => (
    <FooterContainer>
      <PaddedSection>
          <Text>Fonts Kielo and Planck by Mikko Nuuttila</Text>
          <a href="https://mikkonuuttila.com">Website</a>
          <Text>Podcast music by DJ Quads</Text>
          <a href="https://soundcloud.com/aka-dj-quads">Soundcloud</a>
      </PaddedSection>
    </FooterContainer>
  );

export default Footer;
