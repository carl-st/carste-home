import React, { ComponentType } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Navigation,
  NameContainer,
  NavigationButtonsContainer,
  NavigationButton,
  Name,
  LanguageButton,
} from './styles';

const Header: ComponentType = () => {
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
    <Navigation>
      <NameContainer>
        <Name>CARSTE</Name>
      </NameContainer>
      <NavigationButtonsContainer>
        <Link href="/home">
          <NavigationButton>Start</NavigationButton>
        </Link>
        <Link href="/podcast">
          <NavigationButton>Podcast</NavigationButton>
        </Link>
        <Link
          href={router.pathname}
          locale={router.locale === 'pl' ? 'en' : 'pl'}
        >
          <LanguageButton>{renderLanguageButtonLabel()}</LanguageButton>
        </Link>
      </NavigationButtonsContainer>
    </Navigation>
  );
};

export default Header;
