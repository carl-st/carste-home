import React from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faGithub,
  faLinkedinIn,
  faTwitch,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { SocialContainer, SocialLink, FontAwesomeIconStyled } from '../PlayersBar/styles';

const ShareBar: React.FunctionComponent = () => (
  <SocialContainer>
    <SocialLink
      aria-label="E-Mail"
      className="fontawesome"
      href="mailto:karol.stepien@me.com"
    >
      <FontAwesomeIconStyled icon={faEnvelope} size="1x" />
    </SocialLink>
    <SocialLink
      aria-label="LinkedIn"
      className="fontawesome"
      href="https://www.linkedin.com/in/carl-st/"
    >
      <FontAwesomeIconStyled icon={faLinkedinIn} />
    </SocialLink>
    <SocialLink
      aria-label="GitHub"
      className="fontawesome"
      href="https://github.com/carl-st"
    >
      <FontAwesomeIconStyled icon={faGithub} />
    </SocialLink>
    <SocialLink
      aria-label="Instagram"
      className="fontawesome"
      href="https://instagram.com/carl_st"
    >
      <FontAwesomeIconStyled icon={faInstagram} />
    </SocialLink>
    <SocialLink
      aria-label="Twitter"
      className="fontawesome"
      href="https://twitter.com/karlos_stepien"
    >
      <FontAwesomeIconStyled icon={faTwitter} />
    </SocialLink>
    <SocialLink
      aria-label="Twitch"
      className="fontawesome"
      href="https://twitch.com/carl_st"
    >
      <FontAwesomeIconStyled icon={faTwitch} />
    </SocialLink>
  </SocialContainer>
);

export default ShareBar;
