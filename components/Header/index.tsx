import React, { ComponentType } from 'react';
import Link from 'next/link';
import {
  Navigation,
  NameContainer,
  NavigationButtonsContainer,
  NavigationButton,
  Name,
} from './styles';

const Header: ComponentType = () => (
  <Navigation>
    <NameContainer>
      <Name>CARSTE</Name>
    </NameContainer>
    <NavigationButtonsContainer>
      <Link href="/home">
        <NavigationButton>
          Start
        </NavigationButton>
      </Link>
      <Link href="/podcast">
        <NavigationButton>
          Podcast
        </NavigationButton>
      </Link>
    </NavigationButtonsContainer>
  </Navigation>
);

export default Header;
