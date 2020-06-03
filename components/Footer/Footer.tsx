import React from 'react';
import { Text, FooterContainer } from './styles';

const Footer: React.FunctionComponent = () => (
    <FooterContainer>
      <p>
        <Text>Fonts Kielo and Planck by Mikko Nuuttila</Text>
        <a href="https://mikkonuuttila.com">Website</a>
      </p>
      <p>
        <Text>Podcast music by DJ Quads</Text>
        <a href="https://soundcloud.com/aka-dj-quads">Soundcloud</a>
      </p>
    </FooterContainer>
);

export default Footer;