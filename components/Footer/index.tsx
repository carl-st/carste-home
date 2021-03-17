import React, { ComponentType } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Text, FooterContainer, LanguageButton } from './styles';

const Footer: ComponentType = () => {
  const router = useRouter();
  const renderLanguageButtonLabel = () => {
    if (router.locale === 'pl') {
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
      <Link
        href={router.pathname}
        locale={router.locale === 'pl' ? 'en' : 'pl'}
      >
        <LanguageButton>{renderLanguageButtonLabel()}</LanguageButton>
      </Link>
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
