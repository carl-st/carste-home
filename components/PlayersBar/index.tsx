import React, { ComponentType } from 'react';
import {
  faYoutube,
  faSpotify,
  faApple,
  faGoogle,
} from '@fortawesome/free-brands-svg-icons';
import AnchorLogo from '../../public/img/anchor-icon.svg';
import { SocialContainer, SocialLink, FontAwesomeIconStyled } from '../../styles/common';

const PlayersBar: ComponentType = () => (
  <SocialContainer>
    <SocialLink
      aria-label="YouTube"
      href="https://www.youtube.com/channel/UCy0fgqSaFsckMDxX5Ulamsg"
    >
      <FontAwesomeIconStyled icon={faYoutube} />
    </SocialLink>
    <SocialLink
      aria-label="Spotify"
      href="https://open.spotify.com/show/5urLIj00kswGMp4FdABVWg"
    >
      <FontAwesomeIconStyled icon={faSpotify} />
    </SocialLink>
    <SocialLink
      aria-label="Apple Podcast"
      href="https://podcasts.apple.com/pl/podcast/glosariusz-programisty/id1501417936?l"
    >
      <FontAwesomeIconStyled icon={faApple} />
    </SocialLink>
    <SocialLink
      aria-label="Google Podcast"
      href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8xNDFiYzYxNC9wb2RjYXN0L3Jzcw=="
    >
      <FontAwesomeIconStyled icon={faGoogle} />
    </SocialLink>
    <SocialLink
      aria-label="Anchor"
      href="https://anchor.fm/glosariusz-programisty"
    >
      <AnchorLogo />
    </SocialLink>
  </SocialContainer>
);

export default PlayersBar;
