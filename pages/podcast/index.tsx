import Layout from '../../components/Layout/Layout';
import Paragraph from '../../components/Paragraph/Paragraph';
import PlayersBar from '../../components/IconBar/PlayersBar';
import { NextSeo } from 'next-seo';
import {
  Banner,
  CoverContainer,
  CoverImage,
  CoverImageWide,
  DesktopPlayersContainer,
  Logo,
  MobilePlayersContainer,
  NameContainer,
  PaddedSection,
  YouTubeIframe,
} from '../../styles/pages/podcast/styles';
import { ReactElement } from 'react';

const paragraphContent: JSX.Element = (
  <>
    <p>
      Commit, React, Deployment, CI/CD, Fullstack... Branża IT pełna jest
      trudnych nazw, zapożyczeń oraz skrótów, w których bardzo łatwo się
      pogubić. Każdy odcinek wyjaśnia kilka z nich, nawet jeżeli są uważane za
      podstawowe. Posłuchaj niezależnie od tego czy Twoja przygoda z
      programowaniem się zaczyna, masz już trochę doświadczenia, czy może po
      prostu chcesz zrozumieć o co chodzi tym wszystkim nerdom!
    </p>
    <p>Juź dostępny!</p>
  </>
);

const podcastsParagraphContent: ReactElement = (
  <>
    <p>
      Glosariusz Programisty świetnie sprawdza się w codziennej podróży do pracy, podczas wieczornego spaceru, a także jako opowieść na dobranoc!
    </p>
    <DesktopPlayersContainer>
      <YouTubeIframe
        width="300"
        src="https://www.youtube.com/embed/fL2EdWlXlZg"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
      ></YouTubeIframe>
      <YouTubeIframe
        width="300"
        src="https://www.youtube.com/embed/GXyxQrxvm9w"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
      ></YouTubeIframe>
      <YouTubeIframe
        width="300"
        src="https://www.youtube.com/embed/ak7qIGLwjkg"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
      ></YouTubeIframe>
      <YouTubeIframe
        width="300"
        src="https://www.youtube.com/embed/8ExZxu3yiTE"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
      ></YouTubeIframe>
      <YouTubeIframe
        width="300"
        src="https://www.youtube.com/embed/-Yjnsvj1dUg"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
      ></YouTubeIframe>
      <YouTubeIframe
        width="300"
        src="https://www.youtube.com/embed/86yIzvUJdsI"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
      ></YouTubeIframe>
    </DesktopPlayersContainer>
    <MobilePlayersContainer>
      <PlayersBar />
    </MobilePlayersContainer>
  </>
);

const presentationParagraphContent: ReactElement = (
  <>
    <p>
      Glosariusz Programisty to nie tylko podkast w formie audio. To także
      nadchodząca seria prezentacji wyjaśniających informatyczny żargon oraz
      nazwy własne. Każda prezentacja to również zbiór dobrych praktyk i
      ciekawostek związanych z danymi słowami kluczowymi!
    </p>
    <DesktopPlayersContainer>
      <YouTubeIframe
        width="300"
        src="https://www.youtube.com/embed/bznmSm4aOz8"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
      ></YouTubeIframe>
    </DesktopPlayersContainer>
  </>
);

const Podcast = () => (
  <Layout>
    <NextSeo
      title="Glosariusz Programisty - zrozum żargon IT"
      description="Commit, React, Deployment, CI/CD, Fullstack... Branża IT pełna jest
        trudnych nazw, zapożyczeń oraz skrótów, w których bardzo łatwo się
        pogubić. Każdy odcinek podkastu wyjaśnia kilka z nich, nawet jeżeli są uważane za podstawowe!"
      canonical="https://carste.pl/"
      openGraph={{
        url: 'https://carste.pl/podcast',
        title: 'Glosariusz Programisty - zrozum żargon IT',
        description: `Commit, React, Deployment, CI/CD, Fullstack... Branża IT pełna jest
            trudnych nazw, zapożyczeń oraz skrótów, w których bardzo łatwo się
            pogubić. Każdy odcinek podkastu wyjaśnia kilka z nich, nawet jeżeli są uważane za podstawowe!`,
        images: [
          {
            url: 'https://carste.pl/img/podcast-banner.png',
            alt: 'Podcast banner',
          },
        ],
        site_name: 'Podkast',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
    />
    <Banner>
      <CoverContainer>
        <CoverImageWide src="/img/keywords-wide.png" alt="podcast-cover" />
        <CoverImage src="/img/podcast-cover.png" alt="podcast-cover" />
      </CoverContainer>
      <NameContainer>
        <Logo />
        <span>Posłuchaj:</span>
        <PlayersBar />
      </NameContainer>
    </Banner>
    <PaddedSection>
      <Paragraph
        title="Glosariusz Programisty"
        lead="Zrozum żargon IT"
        content={paragraphContent}
      />
      <Paragraph
        title="Posłuchaj"
        lead="Forma audio na każdą wolną chwilę"
        content={podcastsParagraphContent}
      />
      <Paragraph
        title="Zobacz"
        lead="Prezentacje dla lepszej wizualizacji problemu"
        content={presentationParagraphContent}
      />
    </PaddedSection>
  </Layout>
);

export default Podcast;
