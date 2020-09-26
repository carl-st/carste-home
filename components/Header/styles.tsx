import styled from 'styled-components';
import theme from '../../styles/theme';

export const Navigation = styled.header`
  background-color: ${theme.colors.lightShades};
  color: black;
  display: flex;
  justify-content: space-between;
  height: ${theme.sizes.mobileHeaderHeight};
  overflow: hidden;
  padding: 10px 40px;
  top: 0;
  transition: height 0.3s ease-in;
  z-index: 1;
  flex-direction: column;

  @media (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    height: ${theme.sizes.desktopHeaderHeight};
  }
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.div`
  flex: 1;
  color: ${theme.colors.mainBrand};
  display: inline;
  font-size: 2rem;
  font-weight: 100;
  font-family: ${theme.fontFamily.mainBrand};
  text-align: center;

  @media (min-width: ${theme.breakpoints.tablet}) {
        text-align: left;
        font-size: 3rem;
    }
`;

export const NavigationButtonsContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  text-align: center;

  @media (min-width: ${theme.breakpoints.tablet}) {
    max-width: 400px;
  }
`;

export const NavigationButton = styled.div`
  background: transparent;
  border: none;
  flex: 1;
  font-family: ${theme.fontFamily.heading};
  font-size: 1.2rem;
  font-weight: 900;
  line-height: 3rem;
  text-transform: uppercase;
  min-width: 120px;

  &:hover {
    background: ${theme.colors.mainBrand};
    border-radius: 4px;
    color: white;
    cursor: pointer;
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 1.6rem;
  }
`;

export const MenuButton = styled.div`
  font-size: 1.5rem;
  outline: none;
  background: transparent;
  border: none;

  @media (min-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const FullscreenMenu = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  z-index: 2;
`;
