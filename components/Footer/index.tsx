import React, { ComponentType } from 'react';
import { useTranslation } from 'next-i18next';
import { Text, FooterContainer, LanguageButton } from './styles';

const Footer: ComponentType = () => {
  const [t, i18n] = useTranslation('footer');

  const renderLanguageButtonLabel = () => {
    if (i18n.language === 'pl') {
      return (
        <span>
          <u>{'PL'}</u>
          {' / EN'}
        </span>
      );
    }
    return (
      <span>
        {'PL / '}
        <u>{'EN'}</u>
      </span>
    );
  };

  return (
    <FooterContainer>
      <LanguageButton
          type="button"
          onClick={() =>
            i18n.changeLanguage(i18n.language === "pl" ? "en" : "pl")
          }
        >
          {renderLanguageButtonLabel()}
      </LanguageButton>
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
};

export default Footer;
