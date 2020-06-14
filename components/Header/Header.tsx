import React from 'react';
import Link from 'next/link';
import theme from '../../styles/theme';
import {
  Navigation,
  NameContainer,
  NavigationButtonsContainer,
  NavigationButton,
  Name,
} from './styles';

const Header: React.FunctionComponent = () => (
  <Navigation>
    <Link href="/">
      <NameContainer>
        <Name>CARSTE</Name>
      </NameContainer>
    </Link>
    <NavigationButtonsContainer>
      <Link href="/blog">
        <NavigationButton>Blog</NavigationButton>
      </Link>
      <Link href="/podcast">
        <NavigationButton>Podkast</NavigationButton>
      </Link>
    </NavigationButtonsContainer>
  </Navigation>
);

export default Header;
